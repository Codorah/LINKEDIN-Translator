import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

import { generateLinkedinPost, getCatalog } from "./src/lib/translator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = normalize(join(__filename, ".."));
const publicDir = join(__dirname, "public");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

async function parseBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  if (!chunks.length) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf-8"));
}

async function serveStaticFile(response, pathname) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const resolvedPath = normalize(join(publicDir, safePath));

  if (!resolvedPath.startsWith(publicDir)) {
    sendJson(response, 403, { error: "Acces refuse." });
    return;
  }

  try {
    const file = await readFile(resolvedPath);
    const extension = extname(resolvedPath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    sendJson(response, 404, { error: "Fichier introuvable." });
  }
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const { pathname } = requestUrl;

  if (request.method === "GET" && pathname === "/api/catalog") {
    sendJson(response, 200, getCatalog());
    return;
  }

  if (request.method === "POST" && pathname === "/api/translate") {
    try {
      const body = await parseBody(request);
      const result = generateLinkedinPost(body);

      sendJson(response, 200, {
        ...result
      });
    } catch (error) {
      sendJson(response, 400, {
        error: "Impossible de traiter la requete.",
        detail: error instanceof Error ? error.message : "Erreur inconnue"
      });
    }
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Methode non autorisee." });
    return;
  }

  await serveStaticFile(response, pathname);
});

server.listen(port, () => {
  console.log(`LinkedIn Translator MVP disponible sur http://localhost:${port}`);
});

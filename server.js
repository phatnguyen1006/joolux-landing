/* eslint-disable @typescript-eslint/no-unused-vars */
// server.js
const { createServer } = require("http");
const next = require("next");
const { parse } = require("url");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        decodeURIComponent(req.originalUrl);
        handle(req, res, parsedUrl);
    }).listen(3000, (err) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000");
    });
});

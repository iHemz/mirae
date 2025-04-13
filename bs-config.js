// bs-config.js
const config = {
  port: 3000,
  files: ["./src/**/*.{html,htm,css}", "./dist/**/*.js"],
  server: {
    baseDir: ["./src", "./dist"],
    routes: {
      "/scripts": "dist/scripts",
      "/styles": "src/styles",
      // "/서비스소개": "src/서비스소개.html",
    },
  },
  watch: true,
  watchOptions: {
    ignored: ["node_modules", ".git"],
  },
};

// Add middleware to handle .html extension rewriting
config.middleware = [
  function (req, res, next) {
    const url = req.url.split("?")[0]; // Ignore query params
    const hasExtension = url.includes(".");
    const isDirectory = url.endsWith("/");
    const isRoute = Object.keys(config.server.routes).some((route) =>
      url.startsWith(route)
    );

    if (!hasExtension && !isDirectory && !isRoute) {
      req.url += ".html";
    }
    next();
  },
];

module.exports = config;

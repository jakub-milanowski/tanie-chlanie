/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [/.*/]
  // devServerPort: 8000
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};

/*
exports.routes = async (defineRoutes) => {
  return defineRoutes((route) => {
    route("/axios/:path*", "http://0.0.0:8000/:path*");
  });
};*/

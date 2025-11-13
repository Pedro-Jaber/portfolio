module.exports.error400 = (req, res) => {
  res.status(400).render("error/400", { title: "400", page: "error" });
};

module.exports.error401 = (req, res) => {
  res.status(401).render("error/401", { title: "401", page: "error" });
};

module.exports.error403 = (req, res) => {
  res.status(403).render("error/403", { title: "403", page: "error" });
};

module.exports.error404 = (req, res) => {
  res.status(404).render("error/404", { title: "404", page: "error" });
};

module.exports.error405 = (req, res) => {
  res.status(405).render("error/405", { title: "405", page: "error" });
};

module.exports.error418 = (req, res) => {
  res.status(418).render("error/418", { title: "418", page: "error" });
};

module.exports.error500 = (req, res) => {
  res.status(500).render("error/500", { title: "500", page: "error" });
};

module.exports.error503 = (req, res) => {
  res.status(503).render("error/503", { title: "503", page: "error" });
};

module.exports.error504 = (req, res) => {
  res.setHeader("Retry-After", "60");
  res.status(504).render("error/504", { title: "504", page: "error" });
};

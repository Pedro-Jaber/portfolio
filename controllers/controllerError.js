module.exports.error400 = (req, res) => {
  res.status(400).render("error/400");
};

module.exports.error401 = (req, res) => {
  res.status(401).render("error/401");
};

module.exports.error403 = (req, res) => {
  res.status(403).render("error/403");
};

module.exports.error404 = (req, res) => {
  res.status(404).render("error/404");
};

module.exports.error405 = (req, res) => {
  res.status(405).render("error/405");
};

module.exports.error418 = (req, res) => {
  res.status(418).render("error/418");
};

module.exports.error500 = (req, res) => {
  res.status(500).render("error/500");
};

module.exports.error503 = (req, res) => {
  res.status(503).render("error/503");
};

module.exports.error504 = (req, res) => {
  res.setHeader("Retry-After", "60");
  res.status(504).render("error/504");
};

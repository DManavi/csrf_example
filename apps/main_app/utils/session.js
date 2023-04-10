module.exports.login = (session, userId) => {
  session = session ?? {};
  session.userId = userId;
};

module.exports.logout = (session) => {
  session.userId = undefined;
};

module.exports.isLoggedIn = (session) => typeof session?.userId === "string";

module.exports.ensureLoggedIn = (req, res, next) => {
  if (this.isLoggedIn(req.session) === false) {
    return res.redirect("/auth/login");
  }

  return next();
};

module.exports.ensureLoggedOut = (req, res, next) => {
  if (this.isLoggedIn(req.session) === true) {
    return res.redirect("/");
  }

  return next();
};

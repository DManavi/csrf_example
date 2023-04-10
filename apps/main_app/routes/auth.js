var express = require("express");
const { logout, ensureLoggedIn, ensureLoggedOut } = require("../utils/session");
var router = express.Router();

const renderLoginPage = (req, res, props) => {
  res.render("auth_login", {
    title: "Login",
    ...(props ?? {}),
  });
};

router.get("/login", ensureLoggedOut, (req, res, next) =>
  res.render("auth_login", { title: "Login" })
);

router.post("/login", ensureLoggedOut, (req, res, next) => {
  if (typeof req.body.user === "string" && req.body.user === req.body.pass) {
    req.session.userId = req.body.user;
    req.session.save((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/");
    });
  } else {
    renderLoginPage(req, res, {
      msg: { type: "danger", body: "Invalid username or password" },
    });
  }
});

router.post(
  "/logout",
  ensureLoggedIn,
  (req, res, next) => {
    logout(req.session);
    req.session.save(next);
  },
  (req, res, next) => res.redirect("/auth/login")
);

module.exports = router;

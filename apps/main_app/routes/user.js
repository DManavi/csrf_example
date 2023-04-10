var express = require("express");
const { ensureLoggedIn } = require("../utils/session");
var router = express.Router();

const renderChangePassword = (req, res, props) => {
  res.render("user_change_password", {
    title: "Change Password",
    user: req.user,

    ...(props ?? {}),
  });
};

router.get("/change-password", ensureLoggedIn, function (req, res, next) {
  renderChangePassword(req, res);
});

router.post("/change-password", ensureLoggedIn, (req, res, next) => {
  console.log("User's password was changed", {
    userId: req.session.userId,
    ...req.body,
  });

  renderChangePassword(req, res, {
    msg: { type: "success", body: "Password was changed" },
  });
});

router.get("/me", ensureLoggedIn, (req, res, next) =>
  res.send({ userId: req.session.userId })
);

module.exports = router;

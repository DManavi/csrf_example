var express = require("express");
const { ensureLoggedIn } = require("../utils/session");
var router = express.Router();

const renderBankPage = (req, res, props) => {
  res.render("bank_transfer", {
    title: "Transfer",
    user: req.user,

    ...(props ?? {}),
  });
};

router.get("/", ensureLoggedIn, function (req, res, next) {
  renderBankPage(req, res, { title: "Bank" });
});

router.post("/transfer", ensureLoggedIn, (req, res, next) => {
  console.log("Money was transferred.", {
    userId: req.session.userId,
    ...req.body,
  });

  renderBankPage(req, res, {
    title: "Bank",
    msg: {
      type: "success",
      body: `$${req.body.amount} was transferred to ${req.body.targetAccount}`,
    },
  });
});

module.exports = router;

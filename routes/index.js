const express = require("express");
const router = express.Router();

// Gov Notify
const apiKey =
  "test-18e3822f-021f-48ce-baaa-ce81bd17d6ea-f5954a4b-f51d-4586-830d-1a63126d16fd";
const NotifyClient = require("notifications-node-client").NotifyClient;
const notifyClient = new NotifyClient(apiKey);
const templateId = "ffbb933d-dd88-48d7-a560-98f031e136c5";
const emailAddress = "alan.henry@digital.mod.uk";

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

/* POST Gov Notify email */
router.post("/email", (req, res) => {
  // Gov Notify send email
  notifyClient
    .sendEmail(templateId, emailAddress, {
      personalisation: {
        first_name: "Amala",
      },
      reference: "my_reference",
    })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  res.redirect("/");
});

module.exports = router;

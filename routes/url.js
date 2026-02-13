const express = require("express");
const router = express.Router();

const {
  handleGenerateNewShortURL,
  handleRedirectURL,
} = require("../controllers/url");

// ✅ ADD THIS (GET /url)
router.get("/", (req, res) => {
  return res.json({
    message: "Send POST request on /url with { url } in body",
  });
});

// existing routes
router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedirectURL);

module.exports = router;

const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleVisitHistoryAndredirection,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/:shortId", handleVisitHistoryAndredirection);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;

const router = require("express").Router();
const {searchWord,getAllWord} = require("./../../controllers/api/word-api");


router.post("/search/:word",searchWord);

router.get("/word-list",getAllWord)


module.exports = router;
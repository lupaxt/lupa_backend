// const cors = require("cors");

/* app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//CORS BS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
}); */
/* 
app.post("/parse/alt", function(req, res) {
  const { url, titleOnly } = req.body;
  let read_article = {};

  read(url, async function(err, article, meta) {
    if (err) {
      res.send(new Error(err));
      return;
      // throw err
    }
    // console.log("META 1 ", meta)
    read_article.title = article.title;

    if (titleOnly) {
      res.json(read_article.title);
      return;
    }
    res.json(read_article);
  });
}); */

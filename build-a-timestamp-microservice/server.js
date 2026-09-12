import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Do not change code above this line
app.get("/api{/:date}", (req, res) => {
  const input = req.query.date || req.params.date;

  let date;

  if (!input) {
    date = new Date();
  } else if (!isNaN(Number(input))) {
    date = new Date(Number(input));
  } else {
    date = new Date(input);
  }

  if (isNaN(date.getTime())) {
    return res.json({
      error: "Invalid Date"
    });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});
// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

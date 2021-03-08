// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();
// const { readdirSync } = require("fs");
// const authRoutes = require("./routes/auth");
// // app
// const app = express();

// // db
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   })
//   .then(() => console.log("DB CONNECTED"))
//   .catch((err) => console.log("DB CONNECTION ERR", err));

// // middlewares
// app.use(morgan("dev"));
// app.use(bodyParser.json({ limit: "2mb" }));
// app.use(cors());

// // route
// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// // port
// const port = process.env.PORT || 8000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { readdirSync } = require("fs");
const authRoutes = require("./routes/auth");



var app =express()
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// app.use(parser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.send("i am root....");
});


mongoose.connect("mongodb+srv://admin:admin@cluster0.0dalr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
// app.listen(process.env.PORT || 8000,()=>{
//     console.log("server started");
// })
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
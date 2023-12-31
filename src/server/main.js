const express = require("express");
const ViteExpress = require("vite-express");
require("dotenv").config();
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const app = express();

// const { PrismaClient } = require('@prisma/client')                  //imported prisma to make register form and future routes work
// const prisma = new PrismaClient();

//logging middleware 
app.use(morgan("dev"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//token middleware
// app.use((req, res, next) => {
//   const bearerInfo = (req.headers.authorization)

//   if (!bearerInfo) req.user = null;
//   else if (bearerInfo.includes("Bearer ")) {
//     const tokenSplit = bearerInfo.split("Bearer ");
//     const token = tokenSplit[1]
//     try {req.user = jwt.verify(token, process.env.JWT_SECRET)}
//     catch(error) {req.user = null};
//   }
//   else req.user = null;
//   console.log("USER: ", req.user);
//   next()
// });

app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (error) {
      console.error("JWT Verification Error: ", error);
      req.user = null;
    }
  } else {
    req.user = null;
  }
  next();
});

//API ROUTES
app.use('/api', require("./API_routes/index.js"))
app.use('/auth', require("./auth_routes/auth.js"))


app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 8000, () =>
  console.log("Server is listening on port 8000..."),
);

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB "mongodb://localhost/reactreadinglist"
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_mqjkgmjx:pdr7tcelkop5q9qr79osk4t6nf@ds033887.mlab.com:33887/heroku_mqjkgmjx");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

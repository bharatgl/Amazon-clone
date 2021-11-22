const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JyLaySDM9GCM5aoLkgQ5o5dAZsmhEgbfh1j96FlzEOzZPgBNruWxXrDQoXcYdVfqhoj4Maf6Jo44TLVBLOC6ygp00ZPb7qNb0"
);

//API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntens.create({
    amount: total, //subunits of the currency
    currency: "rupee",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/clone-b540c/us-central1/api

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51L9m55SCQmpVLuslxvpeXp2moVHWee4HMfWH5IpW7Ls8FZnVsHY2uY5SCGptYKpXULI1Q0h3WzM1lCuFpMVJbJvj00Gh1Rem5k")

//API

// --App config
const app=express();

// --Middelewares
app.use(cors({origin: true}));
app.use(express.json());

// --API routes
app.get('/', (request, response) => response.status(200).send('Hello world'));
// app.get('/ijas', (request, response) => response.status(200).send('Hello world, Im reactJS developer'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment request recieved", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(total),
        currency: "inr",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// --Listen command
exports.api = functions.https.onRequest(app);

// --Example endpoint
//http://localhost:5001/clone-41e93/us-central1/api



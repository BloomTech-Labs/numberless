var stripe = require("stripe")(process.env.STRIPE_SECRET);

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}


const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    const charge = stripe.charges.create({
      amount: req.body.amount,
      currency: req.body.currency,
      description: req.body.description,
      source: req.body.source,
      statement_descriptor: 'Custom descriptor',
    });
    charge
      .then(createdCharge => res.json(createdCharge))
      .catch(err => res.status(422).json(err))
  });

  return app;
};

module.exports = paymentApi;
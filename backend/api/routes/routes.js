const userControllerMethods = require ('../controllers/userControllers');

const middleware = require ('../middleware/middleware');

module.exports = (app) => {
    app.route('/create-user').post(middleware.hashPassword, userControllerMethods.createUser);
    app.route('/login').post(middleware.authenticate, userControllerMethods.userLogin);
    app.route('/create-stripe-customer').post(userControllerMethods.createStripeCustomer);
    app.route('/create-stripe-subscription').post(userControllerMethods.createStripeSubscription);
}
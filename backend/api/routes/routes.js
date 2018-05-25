const userControllerMethods = require ('../controllers/userControllers');

const middleware = require ('../middleware/middleware');
const paymentApi = require ('./payments');

module.exports = (app) => {
    paymentApi(app);
    app.route('/create-user').post(middleware.hashPassword, userControllerMethods.createUser);
    app.route('/login').post(middleware.authenticate, userControllerMethods.userLogin);
}
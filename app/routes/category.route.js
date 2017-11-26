module.exports = function(app) {
    var categories = require('../controllers/category.controllers')
    app.route('/categories')
        .get(categories.list)
        .post(categories.create)
}
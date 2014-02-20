var destinationsModel = require('../models/destinations.js');

module.exports = {
	place: function (req, res) {
		res.render('currentLoc', {
		title: 'Magellan\'s Magical Adventure',
		landing: destinationsModel.find(req.params.place)
		});
	}
};
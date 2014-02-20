var destinations = require('../models/destinations.js');

module.exports = {
	index: function (req, res) {
		res.render('index', {
			title: 'Magellan\'s Magical Adventure',
			locations: destinations.findAll()
		});
	}
};

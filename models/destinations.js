var destinations = [
	{
	name: 'Seville',
	description: 'starting point',
	previous:'#',
	next: 'Canary Islands'
	},

	{
	name: 'Canary Islands',
	description: 'second point',
	previous:'Seville',
	next: 'Cape Verde'
	},

	{
	name: 'Cape Verde',
	description: "third point",
	previous:'Canary Islands',
	next: 'Strait of Magellan'
	},

	{
	name: 'Strait of Magellan',
	description: "fourth point",
	previous:'Cape Verde',
	next: 'Guam'
	},

	{
	name: 'Guam',
	description: "fifth point",
	previous:'Strait of Magellan',
	next: 'Phillipines'
	},

	{
	name: 'Phillipines',
	description: "sixth point",
	previous:'Guam',
	next: 'Seville'
	}
];

module.exports = {
	findAll: function() {
		return destinations.slice();
	},
	find: function(place) {
		var currentLandings = destinations.filter(function(landing){
			return landing.name === place;
		});
		return currentLandings[0];
	}
};
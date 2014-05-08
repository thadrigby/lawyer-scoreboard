var express = require('express');
	app = express();


var Sequelize = require('sequelize')
	, sequelize = new Sequelize('lawyer_scoreboard', 'root', null, {
		host: 'localhost'
	});

sequelize
	.authenticate()
	.complete(function(err) {
		if (!!err) {
			console.log('Unable to connect to the database:', err)
		} else {
			console.log('Connection has been established successfully.')
		}
	});

	var lawyer = sequelize.define('lawyer', {
		name: Sequelize.STRING,
		location: Sequelize.STRING,
		wins: Sequelize.INTEGER,
		loses: Sequelize.INTEGER,
		hourly_rate: Sequelize.FLOAT(5,2)
	});

	sequelize
		.sync()
		.complete(function (err) {
			if (!!err) {
				console.log('An error occrured while creating the table:', err)
			} else {
				console.log('It worked!')
			}
		});

	app.get('/lawyer', function(req, res){
		lawyer.all().success(function(lawyers) {
			res.send(lawyers)
		}) 
	});
	


	sequelize.sync();

app.listen(3000);




















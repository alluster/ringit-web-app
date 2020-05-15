require('dotenv').config()
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes');
const handle = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;
var mysql = require('mysql');
var bodyParser = require('body-parser')
const SQL = require('sql-template-strings')
var sslRedirect = require('heroku-ssl-redirect');


 
  var pool = mysql.createPool({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: 'heroku_79e2f033f8b9b65'
  });
 


app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json())
	server.use(sslRedirect());
    server.use(bodyParser.urlencoded({
      extended: true
    }));
   
	server.get('/api/getrinkibyid/:id', (req, res) => {
        pool.getConnection(function(err, connection) {

			if (err) throw err; 
			query = SQL`SELECT * FROM ringit WHERE id=${req.params.id}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});
	})
	
	server.get('/api/addrinki', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`INSERT INTO ringit (owner, created, name, location, image, description) VALUES (${req.query.owner}, ${req.query.created},${req.query.name},${req.query.location}, ${req.query.image}, ${req.query.description})`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)

				connection.release();
				if (error) throw error;
			});
		});

	})
	server.get('/api/addusertorinki', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`INSERT INTO shared_ringit (id_rinki, id_user, user_email) VALUES (${req.query.id_rinki}, ${req.query.id_user}, ${req.query.user_email})`
			connection.query(
				query,
				function (error, results, fields) {
				connection.release();
				if (error) throw error;
			});
		});

	})
	server.get('/api/getrinkiusers/:id', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`SELECT * FROM shared_ringit WHERE id_rinki=${req.params.id}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});

	})

	server.get('/api/getringitbyowner/:email', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`SELECT * FROM ringit WHERE owner=${req.params.email}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});

	})
	server.get('/api/getrinkibycode/:code', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`SELECT * FROM ringit WHERE id=${req.params.code}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});

	})
	server.get('/api/deleterinki/:id', (req, res) => {
		pool.getConnection(function(err, connection) {
			if (err) throw err; 
			query = SQL`DELETE FROM ringit WHERE id=${req.params.id}`
			connection.query(
				query,
				function (error, results, fields) {
					res.send(results)
					connection.release();
					if (error) throw error;
				}
			);
		});

	})
    server.get('*', (req, res) => {
        return handle(req, res);
    });


    server.listen(PORT, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:' + PORT);
    });
});

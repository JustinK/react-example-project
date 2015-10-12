"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron">
				<h1>This is a react demo</h1>
	  			<p>
		  		  React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap.
		      	</p>
		      	<Link to="about" className="btn btn-primary btn-lg">Lean More</Link>
			</div>
		);
	}
});

module.exports = Home;
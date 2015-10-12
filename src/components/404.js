"use strict";

var React = require('react');

var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Sorry, the page you were looking for could not be found.</p>
				<Link to="app">Back to home page</Link>
			</div>
		);
	}
});

module.exports = NotFoundPage;
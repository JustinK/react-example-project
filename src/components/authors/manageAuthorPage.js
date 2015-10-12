"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var ManageAuthorPage = React.createClass({

	render: function () {
		
		return (
			<div>
				<h1>Manage Author</h1>
			</div>
		);
	}
});

module.exports = ManageAuthorPage;
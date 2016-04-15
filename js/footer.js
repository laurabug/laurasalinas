var React = require('react');
var Item = require('./List.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <ul className="my-list" action="Sub Menu">
            </ul>
            <ul className="my-list" action="Sub Menu">
            </ul>
            <ul className="my-list" action="Sub Menu">
            </ul>
            <ul className="my-list" action="Sub Menu">
            </ul>
        );
    }
})
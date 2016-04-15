var React = require('react');
var List = require('./Footer.jsx');

module.exports = React.createClass({
    render: function() {
        return <ul>{this.props.action}<li>{this.props.name}</li></ul>;
    }
})

var React = require('react');
var Item = require('./Item.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <ul className="my-list">
                <Item className="my-custom-class" name={this.props.name}></Item>
                <Item className="my-custom-class" name={this.props.name}></Item>
                <Item className="my-custom-class" name={this.props.name}></Item>
                <Item className="my-custom-class" name={this.props.name}></Item>
                <Item className="my-custom-class" name={this.props.name}></Item>
                <Item className="my-custom-class" name={this.props.name}></Item>
            </ul>
        );
    }
});

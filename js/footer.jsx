var React = require('react');
var SubMenu = require('./subMenu.jsx');

module.exports = React.createClass({
    render: function() {
        return (
			<div>
				<SubMenu className="some-class" name={this.prop.name}></SubMenu>
				<SubMenu className="some-class" name={this.prop.name}></SubMenu>
				<SubMenu className="some-class" name={this.prop.name}></SubMenu>
				<SubMenu className="some-class" name={this.prop.name}></SubMenu>
            </div>
        );
    }
})
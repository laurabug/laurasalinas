var React = require('react');
var SubMenu = require('./subMenu.jsx');

module.exports = React.createClass({
    render: function() {
        return (
			<div>
				<SubMenu className="some-class"></SubMenu>
				<SubMenu className="some-class"></SubMenu>
				<SubMenu className="some-class"></SubMenu>
				<SubMenu className="some-class"></SubMenu>
            </div>
        );
    }
})
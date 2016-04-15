var React = require('react');
var SubMenu = require('./SubMenu.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <SubMenu className="some-class"></SubMenu>
            <SubMenu className="some-class"></SubMenu>
            <SubMenu className="some-class"></SubMenu>
            <SubMenu className="some-class"></SubMenu>
        );
    }
})
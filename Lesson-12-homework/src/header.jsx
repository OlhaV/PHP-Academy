var React = require('react');
var Menu = require('./menu');

module.exports = React.createClass({
	render: function(menuProps) {
		return <header>
			<Menu {...menuProps}/>
		</header> 
	}
})
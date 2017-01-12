var React = require('react');

module.exports = React.creatClass({
	render: function() {
		return <ul>
			<li> {this.props.phone} </li>
			<li> {this.props.email} </li>
			<li> {this.props.skype} </li>
		</ul>
	}
}); 
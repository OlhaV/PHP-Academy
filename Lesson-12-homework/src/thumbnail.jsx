var React = require('react');
var Badge = require('./badge');
var Header = require('./header');

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <Header phone={this.props.phone} email={this.props.email} skype={this.props.skype} />
        <img src={this.props.imageUrl} alt="..."></img>
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <Badge title={this.props.title} number={this.props.number} />
        </div>
      </div>
    </div>
  }
});

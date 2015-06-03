var React = require('react');
var Badge = require('./badge');

{/*  1.1) define class using the react method "createClass". createClass takes a 
          configuration object that contains a render method that returns JSX.  */ }

module.exports = React.createClass({
	render: function() {
		return <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img src={this.props.imageUrl} alt="..."></img>
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number} />
          </p>
        </div>
      </div>
    </div>
	}
});
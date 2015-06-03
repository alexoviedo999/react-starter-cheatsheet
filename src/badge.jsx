var React = require('react');

{/*  1.1) define class using the react method "createClass". createClass takes a 
					configuration object that contains a render method that returns JSX.  */ }

module.exports = React.createClass({
	render: function() {
		return <button className="btn btn-primary" type="button">

				{ /* 2.1) Any dynamic data takes: { this.props } */ }
			  { this.props.title } <span className="badge">{ this.props.number }</span>
		 </button>
	}
});
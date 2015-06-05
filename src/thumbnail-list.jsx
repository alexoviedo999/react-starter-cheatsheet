// when it's a npm module, the no file path, only name
var React = require('react');
// when it's not a npm module a file path is required
var Thumbnail = require('./thumbnail');
var Dropdown = require('./dropdown');

{/*  1.1) define class using the react method "createClass". createClass takes a 
					configuration object that contains a render method that returns JSX.  */ }

// replace class name variable with module.exports so it can be required
module.exports = React.createClass({
	render: function(){
		//  make array of thumbnails
		var list = this.props.thumbnailData.map(function(thumbnailProps) {
				// {...} syntax passes in the entire object
				return <Thumbnail {...thumbnailProps} />

		});

		return <div>
			{ list }
			<Dropdown title='hello'/>
		</div>
	}
})
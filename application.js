	// 2.2) Create an options object. These options will be available in the render function as props.
		var options = {
    thumbnailData:  [{
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }]
  };


		// 1.2) create instance with 'createElement' and pass in the parent class.
		// 2.3) pass in options to createElement.
		var element = React.createElement(ThumbnailList, options);

		// 1.3) render element with the 'render' method and place in body tag. pass in 
		// 			instace of class and location to be rendered.
		React.render(element, document.querySelector('.container'));

{/*  1.1) define class using the react method "createClass". createClass takes a 
					configuration object that contains a render method that returns JSX.  */ }

var Badge = React.createClass({displayName: "Badge",
	render: function() {
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 

							/* 2.1) Any dynamic data takes: { this.props } */ 
						   this.props.title, " ", React.createElement("span", {className: "badge"},  this.props.number)
					 )
	}
});
{/*  1.1) define class using the react method "createClass". createClass takes a 
					configuration object that contains a render method that returns JSX.  */ }

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function(){
		//  make array of thumbnails
		var list = this.props.thumbnailData.map(function(thumbnailProps) {
				// {...} syntax passes in the entire object
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});

		return React.createElement("div", null, 
			 list 
		)
	}
})
{/*  1.1) define class using the react method "createClass". createClass takes a 
          configuration object that contains a render method that returns JSX.  */ }

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
		return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
	}
});
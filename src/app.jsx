	var React = require('react');
  var ThumbnailList = require('./thumbnail-list');

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

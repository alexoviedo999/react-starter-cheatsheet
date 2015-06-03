{/*  1.1) define class using the react method "createClass". createClass takes a 
					configuration object that contains a render method that returns JSX.  */ }

		var Badge = React.createClass({
			render: function() {
				return  <button className="btn btn-primary" type="button">

									{ /* 2.1) Any dynamic data takes: { this.props } */ }
								  { this.props.title } <span className="badge">{ this.props.number }</span>
							 </button>
			}
		});

		var Thumbnail = React.createClass({
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

		// 2.2) Create an options object. These options will be available in the render function as props.
		var options = {
			title: 'Inbox',
			number: 32,
			header: "Learn React",
			description: "Awesome react",
			imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
		}


		// 1.2) create instance with 'createElement' and pass in the class.
		// 2.3) pass in options to createElement.
		var element = React.createElement(Thumbnail, options);

		// 1.3) render element with the 'render' method and place in body tag. pass in 
		// 			instace of class and location to be rendered.
		React.render(element, document.querySelector('.container'));

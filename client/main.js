// Any JS in here is automatically ran for us

// Import the React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list'

// Create a component. Component is a single function or object which produces some amount of html and allows us to render that to the screen
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount () {
    // Fantastic place to load data!
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data}));
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => console.log(response));
});
   // by wrapping app with the tags, we create an instance instead of a class)

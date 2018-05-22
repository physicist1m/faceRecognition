import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'c0437010e6b240cba0e98a06acc93dc1'
});

const partOptions ={
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}
class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

    app.models.predict(
    Clarifai.FACE_DETECT_MODEL, 
    this.state.input)
    .then(
    response => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    err => {
      throw Error;
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Navigation params={partOptions}/>
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition  imageUrl={this.state.imageUrl}/>
        <Particles className="particles"/>
      </div>
    );
  }
}

export default App;

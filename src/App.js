import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import tachyons from 'tachyons'
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
    <Particles className='particles'
        params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 4,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    }
	}}
    />
      <Navigation />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;

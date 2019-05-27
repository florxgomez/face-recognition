import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import tachyons from 'tachyons'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '9aeb04611e414652a67e4f9cdae1fbd2'
});

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			input: '',
			imageURL: ''
		}
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value})
	}

	onSubmit = () => {
		this.setState({imageURL: this.state.input})
		app.models.predict(
			'e466caa0619f444ab97497640cefc4dc', 
			this.state.input)
		.then(
		    function(response) {
		      console.log(response.outputs[0].data.regions[0].data.face.identity.concepts[0].name,
		      	response.outputs[0].data.regions[0].region_info.bounding_box);
		    },
		    function(err) {
		      // there was an error
		    }
		  );
	}

	render(){
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
			<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
		<FaceRecognition imageURL={this.state.imageURL} />
		</div>
		);
	}
}

export default App;

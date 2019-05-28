import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import tachyons from 'tachyons';
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
			imageURL: '',
			celebrityName: '',
			box: {},
			route: 'signIn',
			isSignedIn: false
		}
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputImage');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width	- (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height)
		}
	}

	displayFaceBox = (box) => {
		this.setState({box: box});
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value})
	}

	onSubmit = () => {
		this.setState({imageURL: this.state.input})
		app.models.predict(
			'e466caa0619f444ab97497640cefc4dc', 
			this.state.input)
		.then(response => { 
			this.displayFaceBox(this.calculateFaceLocation(response));
		    const resultCelebrityName = response.outputs[0].data.regions[0].data.face.identity.concepts[0].name;
		    this.setState({celebrityName : resultCelebrityName})
		  }).catch(err => console.log(err));	 
	}

	onRouteChange = (route) => {
		if(route === 'signout') {
			this.setState({isSignedIn: false})
		} else if(route === 'home') {
			this.setState({isSignedIn: true})
		}
		this.setState({route : route});
	}

	render(){
		const { isSignedIn, imageURL, route, box } = this.state;
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
		{ route === 'home' 
		? <div>
				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
				<FaceRecognition box={box} imageURL={imageURL} celebrityName={this.state.celebrityName} />
			</div> 
		: (
			route === 'signIn'
			? <div>	<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
				<SignIn onRouteChange={this.onRouteChange} /></div>
			: <div><Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
				<Register onRouteChange={this.onRouteChange} /></div>
		)
		
		}
		</div>
		);
	}
}

export default App;

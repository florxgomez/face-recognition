import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';


const initialState = {
	input: '',
		imageURL: '',
		celebrityName: '',
		box: {},
		route: 'signIn',
		isSignedIn: false,
		user: {
			id: '',
			name: '',
			email: '',
			entries: 0,
			joined: ''
		}
}


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			input: '',
			imageURL: '',
			celebrityName: '',
			box: {},
			route: 'signIn',
			isSignedIn: false,
			user: {
				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
				}
		}
	}

	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
		}
		})
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
			bottomRow: height - (clarifaiFace.bottom_row * height) + 100
		}
	}

	displayFaceBox = (box) => {
		this.setState({box: box});
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value})
	}

	onPictureSubmit = () => {
		this.setState({imageURL: this.state.input})
		
		fetch('https://ancient-sands-35408.herokuapp.com/imageurl', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			input : this.state.input
			})
		})
		.then(response => response.json())
		
		 .then(response => { 
			if(response){
				fetch('https://ancient-sands-35408.herokuapp.com/image', {
					method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					id : this.state.user.id
				})
			})
				.then(response => response.json())
				.then(count => {
					this.setState(Object.assign(this.state.user, {entries: count}))
				})
				.catch(console.log)
			}
			this.displayFaceBox(this.calculateFaceLocation(response));
		    const resultCelebrityName = response.outputs[0].data.regions[0].data.face.identity.concepts[0].name;
		    this.setState({celebrityName : resultCelebrityName})
		  }).catch(err => console.log(err));	 
	}

	onRouteChange = (route) => {
		if(route === 'signout') {
			this.setState(initialState)

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
				<ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} name={this.state.user.name} entries={this.state.user.entries}/>
				<FaceRecognition box={box} imageURL={imageURL} celebrityName={this.state.celebrityName} />
			</div> 
		: (
			route === 'signIn'
			? <div>	<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
				<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} /></div>
			: <div><Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
				<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /></div>
		)
		
		}
		</div>
		);
	}
}

export default App;

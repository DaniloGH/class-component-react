import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

Class App extends React.Component {
	state = {
		texto: 'Turma React'
	}
	handleClick() {
		alert('Alerta Aqui')
	}
	handleTextChange(e) {
		this.setState({
			texto: e.target.value
		})
	}
	render() {
		return (
			<div>
				<h1>Hello World! {this.state.texto}</h1>
				<h2>{this.state.texto}</h2>
				<input type="text" onChange={this.handleTextChange}></input>
				<button onClock={this.handleClick.bind(this)}>Click</button>
			</div>
		)
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App name={"Cleydson Souza"} />
	</React.StrictMode>
	document.getElementById('root')
);
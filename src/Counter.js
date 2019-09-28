import React from 'react';

export class Counter extends React.Component {
	state = {
		score: 30,
	}

	//arrow function 형태인 경우 this가 lexical this가 되서 바인딩이 필요없음
	increment = () => {
		this.setState(prevState => ({
			score: prevState.score + 1
		}));
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> -</button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> +</button>
			</div>
		)
	}
}

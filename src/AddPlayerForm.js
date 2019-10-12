import React from 'react';
import {addPlayer} from "./redux/action";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
	textInput = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();

		const form = document.getElementById("form");
		const player = document.getElementById("player");

		console.log(form.checkValidity());
		console.log(player.validity.valid);

		// 스토어로부터 내려받은 것
		this.props.addPlayer(this.textInput.current.value);
		e.currentTarget.reset();
}

render() {
	return (
		<form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
			<input className="input" type="text" id="player" ref={this.textInput}
						 placeholder="enter a player's name" required />
			<input className="input" type="submit" value="Add Player"/>
		</form>
		)
	};
}

// 자식이 부모한테
const mapActionToProps = (dispatch) => ({
	// 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 함수
	addPlayer: (name) => dispatch(addPlayer(name))
})

export default connect(null, mapActionToProps)(AddPlayerForm);



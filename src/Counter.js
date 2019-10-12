import React from 'react';
import PropTypes from 'prop-types';
import {changeScore, removePlayer} from "./redux/action";
import {connect} from "react-redux";

class Counter extends React.Component {
	increment = (delta) => {
		this.props.changeScore(this.props.id, delta);
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"
								onClick={() => this.increment(-1)}> -</button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment"
								onClick={() => this.increment(1)}> +</button>
			</div>
		)
	}
}

Counter.propTypes = {
	changeScore: PropTypes.func,
	id: PropTypes.number,
	score: PropTypes.number,
}

// 자식이 부모한테
const mapActionToProps = (dispatch) => ({
	// 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 함수
	changeScore: (id, delta) => dispatch(changeScore(id, delta))
})

export default connect(null, mapActionToProps)(Counter);

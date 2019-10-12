import React from 'react';
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";
import Proptypes from 'prop-types';
import {connect} from "react-redux";

const Header = ({title}) => {
	return (
		<header className="header">
			<Stats/>
			<h1 className="h1">{title}</h1>
			<Stopwatch></Stopwatch>
		</header>
	);
}

// arrayOf(~~~) 배열 안에 ~~ 타입이 온다
Header.propTypes = {
	title: Proptypes.string,
	players: Proptypes.arrayOf(Proptypes.shape({
		id: Proptypes.number,
		score: Proptypes.number,
		name: Proptypes.string
	}))
}

Header.defaultProps = {
	title: 'Scoreboard'
}

// 부모가 자식한테
// store의 state를 props 매핑
const mapStateToProps = (state) => ({
	// 왼쪽은 props, 오른쪽은 store state
	title: state.playerReducer.title,
})

export default connect(mapStateToProps)(Header);

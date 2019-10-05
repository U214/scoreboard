import React from 'react';
import {Counter} from './Counter';

// pureComponent
// 내부에서 prop를 비교해줘서 바꼈을때만 렌더링 시켜주게
// 일일히 shouldComponentUpdate를 구현하지 않아도 되는 것이다
// 근데 객체를 넘기면 소용이 없다 걔는 레퍼런스타입이니까
export class Player extends React.Component {
	render() {
		const {removePlayer, id, name, score, changeScore} = this.props;
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id) }> X </button>
					{name}
				</span>
				<Counter score={score} changeScore={changeScore} id={id}/>
				</div>
		)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.score !== this.props.score ? true : false;
	}
}

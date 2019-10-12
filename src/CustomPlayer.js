import React from 'react';
import Player from "./Player";

// 뭔가 player겉에다 기능을 감싼 느낌
export const CustomPlayer = (props) => {
	return (
		<Player {...props} >

		</Player>
	);
}
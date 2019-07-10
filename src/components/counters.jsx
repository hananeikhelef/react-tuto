import React, { Component } from 'react';
import Counter from './counter';

// we want to have multiple counter components
class Counters extends Component {
	// we will use the map method  to loop the array
	state = {
		counters: [ { id: 1, value: 4 }, { id: 12, value: 5 }, { id: 1, value: 8 } ]
	};

	handleDelete = (counterId) => {
		console.log('event handlere');
		this.setState({ value: this.state.value + 1 });
	};
	render() {
		return <div>{this.state.counters.map((counter) => <Counter key={counter.id} />)}</div>;
	}
}
export default Counters;

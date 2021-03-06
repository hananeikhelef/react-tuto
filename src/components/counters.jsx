import React, { Component } from 'react';
import Counter from './counter';

// we want to have multiple counter components
class Counters extends Component {
	// we will use the map method  to loop the array
	state = {
		counters: [ { id: 1, value: 4 }, { id: 12, value: 5 }, { id: 1, value: 8 } ]
	};
	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counters };
		counters[index].value++;
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		// this.setState({ value: this.state.value + 1 });
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};
	render() {
		return (
			<div>
				<button>
					onClick={this.handleReset()}
					className = "btn btn-primary btn-sm m-2">Reset
				</button>
				{this.state.counters.map((counter) => <Counter key={counter.id} />)}
			</div>
		);
	}
}
export default Counters;

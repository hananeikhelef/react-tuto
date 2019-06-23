import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: [ 'tag1', 'tag2', 'tag3' ]
		//imageUrl: 'https://picsum.photos/200'
	};

	handleIncrement() {
		console.log('Increment handeled ');
	}
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}> {this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm m-2">Increment</button>
				<ul>{}</ul>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = 'badge m-4 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;

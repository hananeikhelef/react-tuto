import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: [ 'tag1', 'tag2', 'tag3' ]
		//imageUrl: 'https://picsum.photos/200'
	};
	// this is for every event handeler but still we can ot use the constructor because it can be replaces by the arrow function
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	handleIncrement = () => {
		console.log('Increment handeled ', this);
		this.state.count++;
		this.setState({ count: this.state.count + 1 });
	};
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}> {this.formatCount()}</span>
				{/* <button>
					onClick= {this.handleIncrement} // not necessary but still helpful
					className="btn btn-secondarybtn-sm"
				</button> */}
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

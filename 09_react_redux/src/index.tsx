import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
	color: string;
	textSize?: number; // define optional props for Component
}

interface AppState {
	counter: number;
}

class App extends React.Component<AppProps, AppState> {

	// possible definition of state is:
	// then we no need to provide the second generic type
	// state = {number: 0}

	// other way, is use constructor and provide the generic type
	constructor(props: AppProps){
		super(props);

		this.state = {counter: 0};
	}

	onIncrement = (): void => { 
		this.setState({counter: this.state.counter + 1});
	};
	onDecrement = (): void => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render(): React.ReactNode {
		return (
			<div className="container">
				<div className="card mt-5 mx-auto shadow-lg" style={{ width: "18rem" }}>
					<div className="card-body">
						<h5 className="card-title">Counter example</h5>
						<div className="d-grid gap-2 col mx-auto mt-5">
							<button
								className="btn btn-primary"
								onClick={this.onIncrement}
							>
								increment
							</button>
							<button
								className="btn btn-success"
								onClick={this.onDecrement}
							>
								decrement
							</button>
							<p className="text-center">
								current counter: {this.state.counter}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App color="red" />,
	document.querySelector('#root')
);

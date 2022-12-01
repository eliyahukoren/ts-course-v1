import React from "react";
import { Counter } from './Counter';

interface AppProps {
	color: string;
	textSize?: number; // define optional props for Component
}

export class App extends React.Component {
	// possible definition of state is:
	// then we no need to provide the second generic type
	// state = {number: 0}

	// other way, is use constructor and provide the generic type
	constructor(props: AppProps) {
		super(props);

		this.state = { counter: 0 };
	}

	render(): React.ReactNode {
		const color = 'success';
		return (
			<div className="container">
				<h3 className={`text-center mt-5 text-${color}`}>
					TS React-Redux
				</h3>
				<Counter />
			</div>
		);
	}
}

import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
	color: string;
}

class App extends React.Component<AppProps> {
	render(): React.ReactNode {
		return(
			<div className="container">
				<h1 className="text-center">Hi There: {this.props.color}</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<App color="red" />,
	document.querySelector('#root')
);

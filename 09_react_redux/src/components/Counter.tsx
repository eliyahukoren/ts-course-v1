import React, { useState} from "react";


// functional component
export const Counter:React.FC = () => {
	const [counter, setCounter] = useState(0);

	const onIncrement = (): void => {
		setCounter(counter + 1);
	};
	const onDecrement = (): void => {
		setCounter(counter - 1);
	};

	return (
		<div className="card mt-5 mx-auto shadow-lg" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">Counter example</h5>
				<div className="d-grid gap-2 col mx-auto mt-5">
					<button className="btn btn-primary" onClick={onIncrement}>
						increment
					</button>
					<button className="btn btn-success" onClick={onDecrement}>
						decrement
					</button>
					<p className="text-center">current counter: {counter}</p>
				</div>
			</div>
		</div>
	);
};


import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

class _Todos extends React.Component<AppProps> {
	
	fetchTodos = () => {
		this.props.fetchTodos();
	}

	onDeleteTodo = (id: number): void => {
		this.props.deleteTodo(id);
	}

	renderList():JSX.Element[]{
		return this.props.todos.map((todo: Todo) => {
			return (
				<div key={todo.id} onClick={() => this.onDeleteTodo(todo.id)} className="alert alert-secondary" role="alert">
					{todo.title}
				</div>
			);
		})
	}

	render() {
		return (
			<div
				className="card mt-5 mx-auto shadow-lg"
			>
				<div className="card-body">
					<h5 className="card-title">Todos Example</h5>
					<div className="d-grid gap-2 col mx-auto mt-5">
						<button className="btn btn-primary" onClick={this.fetchTodos}>
							Fetch
						</button>
						<p className="text-center">Hi there!</p>
						<div>{this.renderList()}</div>
					</div>
				</div>
			</div>
		);

	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const Todos = connect(
	mapStateToProps, 
	{ fetchTodos, deleteTodo }
)(_Todos);

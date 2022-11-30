import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
	print:()=>{};
}

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
		The todo with id: ${id},
		has a title of: ${title}
		is it finished: ${completed}
	`)
} 

axios.get(url).then(response => {
	const todo = response.data as ITodo;

	const { id, title, completed } = todo;
	logTodo(id, title, completed);

});

import { combineReducers } from 'redux';
import { Album, Todo, User } from '../actions';
import { todoReducer } from './todos';
import { userReducer } from './users';
import { albumReducer } from './albums';

export interface StoreState{
	todos: Todo[];
	users: User[];
	albums: Album[];
}

export const reducers = combineReducers<StoreState>({
	todos: todoReducer,
	users: userReducer,
	albums: albumReducer,
});

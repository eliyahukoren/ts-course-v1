import { FetchTodosAction, DeleteTodoAction } from "./todos";
import { FetchUsersAction, DeleteUserAction } from "./users";
import {
	FetchAlbumsAction,
	DeleteAlbumAction,
	UpdateAlbumAction,
} from "./albums";

export enum ActionTypes {
	fetchTodos,
	deleteTodo,
	fetchUsers,
	deleteUser,
	fetchAlbums,
	deleteAlbum,
	editAlbum,
}

type TodosAction = FetchTodosAction | DeleteTodoAction;
type UsersAction = FetchUsersAction | DeleteUserAction;
type AlbumsAction = FetchAlbumsAction | DeleteAlbumAction | UpdateAlbumAction;

export type Action = TodosAction | UsersAction | AlbumsAction;

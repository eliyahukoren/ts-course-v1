import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/users?_limit=20";

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
	phone: string;
	website: string;
}

export interface FetchUsersAction {
	type: ActionTypes.fetchUsers;
	payload: User[];
}

export interface DeleteUserAction {
	type: ActionTypes.deleteUser
	payload: number
}

export const fetchUsers = () => {
		return async (dispatch: Dispatch) => {
			const response = await axios.get<User[]>(url);

			dispatch<FetchUsersAction>({
				type: ActionTypes.fetchUsers,
				payload: response.data,
			});
		};

}

export const deleteUser = (id: number):DeleteUserAction => {
		return {
			type: ActionTypes.deleteUser,
			payload: id,
		};
};

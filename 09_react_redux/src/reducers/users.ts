import { User, Action, ActionTypes } from "../actions";

export const userReducer = (state: User[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload;
		case ActionTypes.deleteUser:
			return state.filter((user: User) => user.id !== action.payload);
		default:
			return state;
	}
};

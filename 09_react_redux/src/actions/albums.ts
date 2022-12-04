import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = "https://jsonplaceholder.typicode.com/albums?_limit=20";

export interface Album {
	id: number;
	userId: number;
	title: string;
}

export interface FetchAlbumsAction {
	type: ActionTypes.fetchAlbums;
	payload: Album[];
}

export interface DeleteAlbumAction {
	type: ActionTypes.deleteAlbum;
	payload: number;
}

export interface UpdateAlbumAction {
	type: ActionTypes.editAlbum;
	payload: {
		id: number,
		title: string
	}
}

export const fetchAlbums = () => {
	return async (dispatch: Dispatch) => {
		const result = await axios.get<Album[]>(url);

		dispatch<FetchAlbumsAction>({
			type: ActionTypes.fetchAlbums,
			payload: result.data
		})
	}
}

export const deleteAlbum = (id: number):DeleteAlbumAction => {
	return {
		type: ActionTypes.deleteAlbum,
		payload: id
	}
};

export const editAlbum = (id: number, title: string):UpdateAlbumAction => {
		return {
			type: ActionTypes.editAlbum,
			payload: { id, title }
		};

};
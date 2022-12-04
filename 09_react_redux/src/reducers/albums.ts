import {Album, Action, ActionTypes} from '../actions';

export const albumReducer = (state: Album[] = [], action: Action) => {
	switch (action.type){
		case ActionTypes.fetchAlbums:
			return action.payload;
		case ActionTypes.deleteAlbum:
			return state.filter((album: Album) => album.id !== action.payload );
		case ActionTypes.editAlbum:
			return state.map((album:Album) => {
				if( album.id === action.payload.id){
					album.title = action.payload.title;
				}

				return album;
			});	
		default: return state;	
	}
}
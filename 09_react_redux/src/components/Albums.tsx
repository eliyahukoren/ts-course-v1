import { useEffect, useState } from "react";
import { Album, fetchAlbums, editAlbum, deleteAlbum  } from "../actions";
import {connect} from 'react-redux';
import { StoreState } from "../reducers";

interface AlbumProps {
	albums: Album[];
	fetchAlbums: Function;
	deleteAlbum: typeof deleteAlbum;
	editAlbum: typeof editAlbum;
}

const _Album = (props:AlbumProps):JSX.Element => {
	return (
		<div>Albums</div>
	);
}

const mapStateToProps = ({albums}: StoreState): {albums: Album[]} => {
	return {albums}
}

export const Albums = connect(
	mapStateToProps,
	{
		fetchAlbums,
		editAlbum,
		deleteAlbum
	}
)(_Album);
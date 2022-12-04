import { useState, useEffect} from 'react';
import { connect } from "react-redux";
import { User, fetchUsers, deleteUser} from '../actions';
import { StoreState } from "../reducers";

interface UserProps {
	users: User[];
	fetchUsers: Function;
	deleteUser: typeof deleteUser;
}


const _Users = (props: UserProps):JSX.Element => {
	const [fetching, setFetching ] = useState(false);

	useEffect(() => {
		console.log(props.users)
	}, [])

	useEffect(() => {
		if( props.users && props.users.length){
			setFetching(false);
		}
	}, [props.users]);

	const fetchUsers = () => {
		props.fetchUsers();
		setFetching(true);
	}

	const deleteUser = (id: number) => {
		props.deleteUser(id)
	}

	const renderList = ():JSX.Element[] => {
		return props.users.map((user: User) => {
			return (
				<div className="col-sm-6 mb-3" key={user.id}>
					<div className="card" onClick={() => deleteUser(user.id)}>
						<div className="card-body">
							<h5 className="card-title">{user.name}</h5>
							<p className="card-text">{user.address.city}</p>
						</div>
					</div>
				</div>
			);
		});
	}


	return (
		<div className="card mt-5 mx-auto shadow-lg">
			<div className="card-body">
				<h5 className="card-title">Users Example</h5>
				<div className="d-grid gap-2 col mx-auto mt-5">
					<button className="btn btn-primary" onClick={fetchUsers}>
						Fetch Users
					</button>
					<p className="text-center">
						{fetching ? `Loading ... ` : null}
					</p>
					<div className="row">{renderList()}</div>
				</div>
			</div>
		</div>
	);
} 


const mapStateToProps = ({ users }: StoreState): { users: User[] } => {
	return { users };
};

export const Users = connect(mapStateToProps, { fetchUsers, deleteUser })(
	_Users
);

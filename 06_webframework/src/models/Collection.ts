import axios, { AxiosResponse} from "axios";
import { Eventing } from "./Eventing";


export class Collection<T, K>{
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(
		private rootUrl: string,
		private deserialize: (json: K) => T
	){}

	get on(){
		return this.events.on;
	}

	get trigger(){
		return this.events.trigger;
	}

	fetch(){
		axios.get(this.rootUrl)
		.then((response: AxiosResponse) => {
			response.data.forEach((value: K) => {
				this.models.push(
					this.deserialize(value)
				);
			});

			this.trigger('change');
		})
		.catch((err) => {
			console.log("Error in the Collection:", err)
		})
	}
}

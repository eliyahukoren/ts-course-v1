import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	set(value: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(e: string, callback: () => void) :void;
	trigger(e: string): void;
}

interface HasId {
	id?: number;
}


export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	get = this.attributes.get;
	on = this.events.on;
	trigger = this.events.trigger;

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger("change");
	}

	fetch(): void {
		const id = this.get("id");

		if (typeof id !== "number") {
			throw new Error("Cannot fetch without an id");
		}

		this.sync
			.fetch(id)
			.then((response: AxiosResponse) => {
				this.set(response.data);
			})
			.catch(() => {
				this.trigger("error");
			});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => this.trigger("save"))
			.catch(() => {
				this.trigger("error");
			});
	}
}

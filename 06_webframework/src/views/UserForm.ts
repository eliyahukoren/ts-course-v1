import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			"click:.set-name": this.onSetNameClick,
			"click:.set-model": this.onSetModelClick,
			"click:.set-age": this.onSetAgeClick,
		};
	}

	onSetNameClick = (): void => {
		const input = this.parent.querySelector("input");
		this.model.set({ name: input.value });
	};

	onSetModelClick = (): void => {
		this.onSetNameClick();
		console.log("Save:", this.model);
		this.model.save();
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
		console.log("set age button clicked", this.model);
	};

	template(): string {
		return `
			<div>
				<input placeholder="${this.model.get("name")}" class="name-change" />
				<button class="set-name">Change Name</button>
				<button class="set-age">Set Random Age</button>
				<button class="set-model">Save User</button>
			</div>
		`;
	}
}

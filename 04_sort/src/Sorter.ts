interface Sortable {
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
	length: number;
}

export abstract class Sorter implements Sortable{

	// private typeGuardUse(anyCollection: number[] | string): void {
	// 	// with type guard we can use variable with the mixed data type
	// 	// down below example of how to use the type guard

	// 	if (anyCollection instanceof Array) {
	// 		// here available all props and methods of array
	// 		// example:
	// 		const n = anyCollection.push(1);
	// 	}

	// 	if (typeof anyCollection === "string") {
	// 		// here available all props and methods of string
	// 		// example:
	// 		const char = anyCollection.concat("new string");
	// 	}
	// }

	abstract compare(leftIndex: number, rightIndex: number): boolean; 
	abstract swap(leftIndex: number, rightIndex:number):void;
	abstract length: number;
	abstract reverse():void;

	asort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}

	dsort(): void {
		this.asort();
		this.reverse();
	}
}

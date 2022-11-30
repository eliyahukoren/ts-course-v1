// aka.ms/typescript/1
// aka.ms/typescript/2

/*       PRINT ANYTHING                   */
function printAnything<T>(arr: T[]): void{
	arr.forEach(e => console.log(e));
}

printAnything<number>([1,2,3]);
printAnything<string>(['a', '1', '4', 'f']);
/*       END OF PRINT ANYTHING             */

/*       FILL ARRAY WITH ANYTHING          */
function fillArray<T>(len: number, item: T): T[]{
	return new Array(len).fill(item);
}

const strings = fillArray<string>(10, '*');
const numbers = fillArray<number>(10, 5);
/*       END OF FILL ARRAY WITH ANYTHING   */

interface Array<T>{
	concat(...items: Array<T[] | T>): T[];
	reduce<U>(
		callback: (
			state: U, element: T, index: number, array: T[]) => U,
	):U;
}

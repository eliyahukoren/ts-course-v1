
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedLink";

// number sorter 
const numCollection = new NumbersCollection([10, 3, -5, 0, -4, -20]);

numCollection.asort();
console.log("ASC:", numCollection);

numCollection.dsort();
console.log("DESC:", numCollection);



// character sorter
const charCollection = new CharactersCollection("Xaabyk");
// const charSorter = new Sorter(charCollection);

charCollection.asort();
console.log("ASC:", charCollection);

charCollection.dsort();
console.log("DESC:", charCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(1);
linkedList.add(50);

linkedList.asort();
linkedList.print();
console.log("======")
linkedList.dsort();
linkedList.print();



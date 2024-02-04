- growable  and reducable arrray; have the ability to add, remove and indices to adjust from. and something had to have happened.
- First Real Data Structure :
	- arrays like a primitive of computing.
- So what sucks of Array?
	- Deletion
	- insertion
	- its ungrowable
- Linked List :
	- Singly Linked List
	- Double Linked List
- not only visit this node , but can also point to the next node.
- walk this dasiy chain of values.
- Eg: ![[Screenshot 2024-02-04 at 9.38.46 AM.png]]
- Double linked list come another property of previous and that means bidirectional arrows.
- Also called as containers.
- Instead of arrays, mostly used to store heap allocated objects.
- Deletion is O(n); depending on where the pointer is.
- Insertion is O(n); depening on where the pointer is.
- Effectively moved everything over and inserted them.
- ![[Screenshot 2024-02-04 at 9.41.17 AM.png]]
- Insert at a given position is O(c\*1);needing to break away from that thing. 
- Memory Reassignment with moving the pointers:![[Screenshot 2024-02-04 at 9.43.23 AM.png]]
- Removing a element![[Screenshot 2024-02-04 at 9.45.36 AM.png]]
- Running part of deletion: O(1); based just on the four links. Constant operation.

## Time/ Space Complexity:
- General API of Linked Lists:
	- prepend / append : O(1)
	- insertion in the middle: O(N/2)
	- deletion from ends : 0(1); due to pointers present
	- deletion in the middle; O(N/2)
	- get head / tail : O(1)
	- get in general: O(1)

- interface for linked list 
```typescript
	interface LinkedList<T> {
	get length(): number;
	insertAt(item: T , index: number): void;
	remove(item: T) : T | undefined;
	removeAt(index: number): T | undefined;
	append(item: T): void;
	prepend(item: T): void;
	get(index: number): T | undefined;
	} 
```
### Why Linked Lists ?
- They are so fundamental in programming concepts when it comes to DSA.Understanding them will help us with trees, graphs etc.

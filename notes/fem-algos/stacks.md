- great for perf and used in a lot of stuff.
```ts
type Node<T> = {
value: T;
next?!;
prev?!;
}
```
- a stack is backwards to a queue.
- stack of plates
- stack trace ; stack of functions that we have called upto this point.
- we only and remove from the head:
	- to add a element , take a new pointer and point to the current head and pointer the header pointer to the new one.
	- to remove, first save the top of the stack, and point the headerback to the next and remove the pointer of the top to the next one.
	- ![[Screenshot 2024-02-21 at 8.03.10 PM.png]]
- Other operations:
	- push
	- pop
	- peak
- Constraints are awesome !:
	- by making pushing and popping from only one side, the access using the pointer and fast it.
- 
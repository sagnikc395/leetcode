- way to categroize our algorithms time or memory requirements based on input. It is not meant to be a an exact mesaurement. It will not tell us how many CPU cycles it takes, instead it is meant to generalize the growth of our algorithm.
- Generalized way of how algorithm will react based on how input is growing.
- Often helps us to make decisions on why to use a particular datastructure and algorithm or not.
```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for(let i=0;i<n.length;i++){
		sum += n.charCodeAt(i);
	}
	return sum;
}
```
- Big O ->
	- as your input grows , how fast does your computations or memory grows ?
- Imporatant concepts:
	- growth is with respect to the input.
		- can't really trade time for memory.
	- Constants are always almost dropped -> law of big numbers.
	- worst case is usually the way we measure.
		- some algorithms are there which makes sense to have best and average case.
- Check loops and size constraints.
- There is a practical vs theoretical differences:
	- Just because N is faster than N^2, doesnt mean that practically its always faster than for smaller input.
```typescript
//algo 2 
function sum_char_codes2(n: string): number {
let sum = 0;
for(let i=0;i<n.length;i++){
	const charCode = n.charCodeAt(i);
	//captial E
	if(charCode === 69){
	return sum;
	}
	sum += charCode; 
}
	return sum;
}
```
- in big 0, we often consider the worst case. Especially in interviews. worst case s 0(n).
- Eg: O(n^2)
```typescript
function sum_char_codes(n: string): number {
	let sum = 0;
	for(let i=0;i<n.length;i++){
		for(let j=0;j<i;j++){
			sum += n.chatCodeAt(j);
		}
	}
	return sum;
}
```
- Similar we can have O(N^3) -> multiplying 2 matrices , multiplying rows and cols and summing them up.
- O(logn ) -> binary search, trees , half the amount of input each time , eventually reaches 0.
- O(nlogn) -> Quicksorting, traversing and each half check.
- **Craziest runtime yet**:
	- O(sqrt(n))

### Space Complexity:
- Not discussed in the course.
- still important.
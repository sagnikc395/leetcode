- Is data ordered ? can take new advantages on complexity on this fact.
- in binary search dont need to start from the first of it.
- eg: let say jump 10% from start and if we cross it say 10%, go back from to the element linearly ,  this helps in setting the lower and the upper bound.
- or directly jump directly to the middle of the array.
- if not , then can check only 1 part of the array.
- if greater than item , then check in left half ? (cause sorted)
- if smaller than item, then check in right half.
- do this recursively for every half.
- each time it is halving it either no half let to look at , or we found it .
- TC: O(logn) -> each time halving it and losing the search space.
- worst case is when the item is not in the array.
- this type of searching is called as binary search.
- Note: If the input halves at each step its likely O(logn) or O(nlogn) ; depending if we are scanning or not.

### Two Crystal Ball Problem:
- Given that two crystal balls that will break if dropped from high enough distance, determine the exact sport in which it will break in the most optimized way.

- Options:
	- Linear Searching 
	- Binary Searching 

- Generalizes :- some array full of falses and after some time there is a true, followed by trues.
- This array is ordered and we can break it bunch to 0s and 1s.
- Check if one of our crystal block is broke or not.
- TC: O(sqrt(n)) + O(sqrt(n)) :- new running time ; we now broken down a search problem without doing a linear search.
- 
//counter 
// given a integer n , return a counter function. This counter function initially returns n 
// and then returns 1 more than the previous value every subsequent time it is called.


function createCounter(n: number): () => number {
    return function() {
        //using functions and closures 
        // inner function has access to the innner function and its scope
        // used earlier to make oop
        // return n and increment it next time.
        return n++;
    }
}
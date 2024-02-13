// create a hello world function 

function createHelloWorld() {
    return function(...args): string {
       return "Hello World"; 
    }
}
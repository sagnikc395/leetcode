const a = new ArrayBuffer(6);

// get a view into this
const a8 = new Uint8Array(a);

// change a piece of the data
a8[0] = 45;
//skip a byte
a8[2] = 45;

console.log(a);

const a16 = new Uint16Array(a);
console.log(a16);

//specify the next byte value in hexadecimal
a16[2] = 0x45;
console.log(a);

// we took basically a continuous array units and see them in different views
// one of 8bit units 
// other of 16bit units.

// this is actual arrays in javascript, not Array which is bascially list under the hood.

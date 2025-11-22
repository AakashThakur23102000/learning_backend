const {Buffer} = require("buffer")


// here i took 4 bytes of memory
// it is clean memory
// here if we console it shows as array
// const buf = Buffer.alloc(4)


// here we convert string to buffer
// const buf = Buffer.from("Hello Aakash");

// combing both alloc and from we can use it in a new way below
// const buf = Buffer.alloc(10);
// buf.write("This is buffer with alloc value but it prints half as memory allocation is less.")


// this buffer does not clean the memory
// const buf = Buffer.allocUnsafe(10);


// You can do advance consoling you buffer using advance
const buf = Buffer.from("Chai is love.")
console.log(buf?.toString("utf-8",0,4))

console.log(buf)
console.log(buf.toString())
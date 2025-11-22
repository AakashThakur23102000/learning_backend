const EventEmitter = require("events")
const myEvent = new EventEmitter();
myEvent.on("Aakash",()=>{
    console.log("Aakash Event has been emitted.")
})
myEvent.emit("Aakash")
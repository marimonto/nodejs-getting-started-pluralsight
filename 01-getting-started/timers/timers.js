//first challenge
/* const theOneFunc = (time) => {
    console.log( `Hello after ${time} seconds` )
}

setTimeout(theOneFunc, 4 * 1000, 4)
setTimeout(theOneFunc, 8 * 1000, 8) */

//second challenge
let times = 0 
const interval = setInterval(() => {
    times++
    console.log("Hello World")
    if(times === 5){
        clearInterval(interval)
        console.log('Done')
    }
}, 1000);


console.log('Utils.js is Running');
const square = (x) => x*x
const add = (a=10,b=10) => a+b
const subtract = (a,b) => a-b


export { square, add, subtract as default};
console.log('Starting app')

setTimeout(() => {
    console.log('inside of callback1');
},2000);

setTimeout(() => {
    console.log('inside of callback2');
},0);

console.log('Ending app')
// Code your solutions in this file
function writeCards(names , eventName) {
const array = [...names];
    for (let i = 0 ; i < names.length ; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    debugger;
    array[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
}
return array;
}

function countDown(counter) {
    let count = counter;
    while (count >= 0 ) {
      console.log(count);
      count--;
    }
return counter;
}
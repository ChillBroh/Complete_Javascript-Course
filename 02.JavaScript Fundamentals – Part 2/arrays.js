
const friend = ["sara", "AJ","Ishara"];
console.log(friend);

//add element
const add = friend.push("chamith")
//show length
console.log(add)
console.log(friend)

//add element to begining
const addfront = friend.unshift("sanka");
//show length
console.log(addfront)
console.log(friend)

//remove element
const remove = friend.pop()
//show removed element
console.log(remove)
console.log(friend);

//remove element from begining
const removeFront = friend.shift();
console.log(removeFront)
console.log(friend)
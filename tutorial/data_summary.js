// Stack (Primitive) and Heap (Non-primitive)

let myFirstName = "Ravi"

let anotherName = myFirstName
anotherName = "Singh"

console.log(myFirstName);
console.log(anotherName);

//Heap (Non-primitive)

let userone = {
    email: "test@gmail.com",
    pass: "test@123"
}

let usertwo = userone;

usertwo.email = "abc@gmail.com";

console.log(userone.email);
console.log(usertwo.email);

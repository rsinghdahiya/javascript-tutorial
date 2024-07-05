
if(true){
    const username = "John"
    if(true){
        const lastname = "Doe"
        //console.log(username + " " + lastname)
    }
    //console.log(lastname);
}
//console.log(username);

function userOne(){
    const username = "John"
    
    function userTwo(){
        const lastname = "Doe"
        //console.log(username + " " + lastname)    
    }
    userTwo();

    //console.log(lastname)
}
userOne()
//console.log(username) 


// ::::::::::::::: Hoisting ::::::::::::::::::


myFuncation(5);
function myFuncation(add){
    console.log(add)
}

//above function working fine

const myFuncation2 = function(add2){
    console.log(add2)
}
myFuncation2(6)
// above function not working this is call hoisting 
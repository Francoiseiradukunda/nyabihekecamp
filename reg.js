let FirstName=document.getElementById("fname");
let LastName=document.getElementById("lname");
let UserName=document.getElementById("username");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let format=document.querySelector("form");

let action=JSON.parse(localStorage.getItem("action")) || []
format.addEventListener("submit",(e)=>{
    e.preventDefault()

    let stay={
       FIRSTNAME:FirstName.value,
        LASTNAME:LastName.value,
        USERNAME:UserName.value,
        EMAIL:Email.value,
        PASSWORD:Password.value
    }
    if(action.find((hello)=>hello.EMAIL==Email.value)){
alert("user already exist ")
    }
    else{
        action.push(stay);
 
        let change=JSON.stringify(action)
       

        localStorage.setItem("action",change)
        alert("User successful created!")
        console.log(localStorage)
    }
})
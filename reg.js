let firstname=document.getElementById("firstname") .Value;
let lastname=document.getElementById("lname") .Value;
let username=document.getElementById("username") .Value;
let email=document.getElementById("email") .Value;
let password=document.getElementById("password") .Value;

let form=document.querySelector("form")

let act=JSON.parse(localStorage.getItem("act")) || [];

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let object={
        firstname:firstname,
        lastname:lastname,
        username:username,
        email:email,
        password:password
    }
    if(act.find((hello)=> hello.email==email.Value)){
        alert("user arlead exist")
    }
    else{
        act.push(object);
        let change=JSON.stringify(act)
        localStorage.setItem("act",change)
        alert("user successful created!")
        console.log(localStorage)
    }
})
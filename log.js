let UserName=document.getElementById("username");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let format=document.querySelector("form");

let action=JSON.parse(localStorage.getItem("action")) || []
format.addEventListener("submit",(e)=>{
    e.preventDefault()

    let exist=action.find((pass)=>pass.EMAIL==Email.value)

    if(exist && exist.PASSWORD==Password.value){
window.location.href="../index.html"
    }
  
    else if(exist && exist.PASSWORD!=Password.value){ 
        alert("wrong password")
    }else{
        alert("user not exist! please register")
        window.location.href="../reg.html"
    }
})
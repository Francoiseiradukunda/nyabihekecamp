let username=document.getElementById("username")
let emaile=document.getElementById("email")
let password=document.getElementById("password") 

let form=document.querySelector("form")

let store=JSON.parse(localStorage.getItem("store")) || []

form.addEventListener("submit",(e)=>{
e.preventDefault()

let fun=store.find((hello)=>hello.emaile==emaile.value)

if(fun && fun.password==password.value){
    window.location.href="../index.html"
}

else if(fun && fun.password!=password.value){
alert("Wrong password");
}
else{
alert("user not exist!")
window.location.href="../reg.html"
}
})
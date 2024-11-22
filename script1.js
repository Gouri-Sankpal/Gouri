//login things
let auth=document.getElementById('auth')
let loginForm=document.getElementById('loginForm')
let loginemail=document.getElementById("email")
let loginpassword=document.getElementById("password")
let loginbtn=document.getElementById("loginbtn")
let loginerror=document.getElementById("error")
let registerButton=document.getElementById("registerButton")






//register
let register=document.getElementById("register")
let backToLogin=document.getElementById("backToLogin")
let registerForm=document.getElementById('registerForm')
let registerEmail=document.getElementById('registerEmail')
let registerPassword=document.getElementById('registerPassword')
let registerError=document.getElementById('registerError')


//welcome
let welcome=document.getElementById('welcome')

function toggleview(view){
    auth.style.display=view==="auth"?"block":"none"
    register.style.display=view==="register"?"block":"none"
    welcome.style.display=view==='welcome'?"block":"none"
}
registerButton.addEventListener("click",()=>toggleview("register"))
backToLogin.addEventListener("click",()=>toggleview("auth"))

registerForm.addEventListener('submit',handleregister)

loginForm.addEventListener("submit",handlelogin)

async function handlelogin(e){
    e.preventDefault()
    const email=loginemail.value
    const password=loginpassword.value
    console.log(email);
    console.log(password);
    const res=await fetch("http://localhost:3000/users")
    const users=await res.json()
    //console.log(users);
    //let arr=[]
    const user=users.find((ele)=>ele.user===email && ele.password===password)

    if(user){
        
        console.log("user found");
        toggleview('welcome')

    }else{
        console.log("not found");
        
    }
    
    
    
}

async function handleregister(e){
    e.preventDefault();
    let resemail=registerEmail.value.trim()
    let respwd=registerPassword.value.trim()
    console.log(resmail+" "+respwd);
    const res=await fetch("http://localhost:3000/users")
    const users=await res.json()
    console.log(users);
    //let arr=[]
    const user=users.find((ele)=>ele.user===email && ele.password===password)
    if(user){
        registerError.innerText="user already exist"
        return
    }
    
}





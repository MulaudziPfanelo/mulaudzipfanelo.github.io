
//SWITCH LINKS

let log=document.getElementById("log_in")//x
let res=document.getElementById("register")//
let reset=document.getElementById("reset-pass")//

document.querySelector('.register-button').addEventListener('click', ()=>{
  log.style.left="-530px";
  res.style.left="0";
  reset.style.left = "-1060px"
})
document.querySelector('.forgot-password').addEventListener('click', ()=>{
  reset.style.left = "0"
  log.style.left="530px";
  res.style.left="1060px";
})

const Login_switch = ()=>{
  log.style.left="0";
  res.style.left="530px";
  reset.style.left="-530px";
}
// SWITCH END

const ResetPaaswprd = ()=>{
  let reset = document.querySelector('#email-reset').value
  if (reset ==="") {
    swal("Error", "Please provide an email you wish to reset password for!!!", "error")
  }else{

    const data = {
      method: 'POST',
      headers: {'Content-type': 'application/JSON'},
      body: JSON.stringify({Email: reset})
    }
    fetch('/passwordReset', data)
    .then((response)=>{
      return response.json()
    })
    .then((resp)=>{
      if(resp.code === 150){
        //swal("Success", "Successfully sent an reset link, check your email", "success")
        alert("Successfully sent an reset link, check your email")
        
      }else{
        //swal("Error", resp.message.message, "error")
        alert(resp.message.message )
      }
      document.querySelector('#email-reset').value = ""
    })
  }
}

function sign_in(){ 

  let Email = document.getElementById("email-el").value;
  var Password = document.getElementById("password-el").value; 

  if(Email === ""){
    swal("Error", "Email fiels is empty!!!", "error")
  }
  if(Password === ""){
    swal("Error", "Password fiels is empty!!!", "error")
  }

  const customer_info = [{
    Email: Email,
    Password: Password
  }]

  const data ={
    method: 'POST',
    headers: {'Content-type': 'application/JSON'},
    body: JSON.stringify(customer_info)
  }

  document.getElementById("password-el").value = ""

  fetch('/login', data)
  .then((results)=>{
    return results.json()
  })
  .then((response)=>{
    if(response.code === 201)
    {
      location.href = "/admin"

    } else if (response.code === 205) {

      //swal('Error', 'Email Address have not been verified!!!, therefore, you cannot login untill you verify your email, check your email NOW!!', 'error')

      alert('Email Address have not been verified!!!, therefore, you cannot login untill you verify your email, check your email NOW!!')

      return false;

    }else if(response.code === 180){
      //swal("Error", response.message.message, "error")
      alert(response.message.message)
      return false;
    }
    else{
      
      //swal('Error', response.message.message, 'error')
      alert(response.message.message)
      return false;
    }
      

  })

}


function sign_up(){


  let myName = document.getElementById("myName").value;
  if (myName == "") {

      
      return false;
  }
  
  let surname = document.getElementById("surname").value;
  if (surname == "") {

      
      return false;
  }
  var email = document.getElementById("email").value;
    if (email == "") {

       
        return false;
    } 

    var password = document.getElementById("psw").value;
    if (password == "") {

       
        return false;
    }
    var dob = document.getElementById("dob").value;
    if (dob == "") {

       
        return false;
    }

    const customer_info = [{
      Name: myName,
      Surname: surname,
      Email: email,
      DoB: dob,
      Password: password
    }]

    const data ={
      method: 'POST',
      headers: {'Content-type': 'application/JSON'},
      body: JSON.stringify(customer_info)
    }

    document.getElementById("myName").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("dob").value = "";

  fetch('/register', data)
    .then((results)=>{
      return results.json()
    })
    .then((response)=>{
      if(response.code !== 200)
      {
       //swal("Error",response.message.message,"error")
        alert(response.message.message)

        return false;

      } else {

        //swal("Success", "Account successfully created.", "success")
        alert("Account successfully created.")
        setTimeout(() => {
          Login_switch()
        }, 2000);
      }
    })

}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var myInput2=document.getElementById("confirmPassword"); 

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
myInput2.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function checkPassword() {
  let p1=document.getElementById("psw").value;
  let p2=document.getElementById("confirmPassword").value;
  if (p1!=p2) {
    alert("Passwords do not match");
    return false;
    
  }
}
function Check() {
    let checkAns=document.getElementById("check");
    if (checkAns.checked == true){
        
      
    } else {
       
        alert("Please Accept Terms and Conditions");
        return false;
    }
    
}

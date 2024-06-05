const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const button = document.getElementById("submitBtn");
// const button2 = documet.getElementsByClassName("btn submit");
// const text = document.querySelector("opinion")
const USERS = JSON.parse(localStorage.getItem("users")) || [];
// const feedback = document.getElementsByClassName("wrapper");

button.addEventListener("click",(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
    else{
    USERS.push({username: username.value, email: email.value, password: password.value});
    localStorage.setItem("users",JSON.stringify(USERS));
    alert("Registered Successfully");
    window.location.href = "index.html"
    }
})

// button2.addEventListener("click",(e)=>{
    
//     USERS.push({opinion: text.value});
//     localStorage.setItem("users",JSON.stringify(USERS));
//     alert("Thank you for your feedback");
//     window.location.href = "cart.html"
// })


function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let navbar = document.querySelector('.header .navbar');
  let menu  = document.querySelector('#menu');
  
  menu.onclick = () =>{
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  };
  
  window.onscroll = () =>{
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
  }
  
  
  
  $(document).ready(function(){
  
      $('.buttons').click(function(){
  
          $(this).addClass('active').siblings().removeClass('active');
  
          var filter = $(this).attr('data-filter')
  
          if(filter == 'all'){
              $('.diet .box').show(400);
          }
          else{
              $('.diet .box').not('.'+ filter).hide(200);
              $('.diet .box').filter('.'+ filter).show(400);
          }
  
      });
  
  });
  
  
  var swiper = new Swiper('.review-slider', {
      loop: true,
      grabCursor:true,
      spaceBetween:20,
      breakpoints:{
          0:{
              slidesPerView: 1,
          },
          640:{
              slidesPerView: 2,
          },
          768:{
              slidesPerView: 3,
          },
      },
  });
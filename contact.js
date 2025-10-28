function validateForm() {

  let name = document.getElementById('fullname').value.trim();
  let email = document.getElementById('email').value.trim();
  let subject = document.getElementById('subject').value.trim();
  let message = document.getElementById('message').value.trim();
  let department = document.getElementById("department").value;


  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let subjectError = document.getElementById('subjectError');
  let messageError = document.getElementById('messageError');
  let departmentError = document.getElementById("departmentError");
  let successMessage = document.getElementById('successMessage');


  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
  departmentError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  
  if(name === '' ){
    nameError.textContent = 'Full Name is required';
    valid = false;
  
    
  }
   else if(name.length < 3){
    messageError.textContent = 'Name must be at least 3 character';
    valid = false;
  }


   
  if(email === ''){
    emailError.textContent = 'Email is required';
    valid = false;
  } else if(!email.includes("@") || !email.includes(".")){
    emailError.textContent = 'Enter a valid email';
    valid = false;
  }


  if(subject === ''){
    subjectError.textContent = 'Subject is required';
    valid = false;
  }


  if(message === ''){
    messageError.textContent = 'Message cannot be empty';
    valid = false;
  } else if(message.length < 10){
    messageError.textContent = 'Message must be at least 10 characters';
    valid = false;
  }


  if(department === ""){
    departmentError.textContent = "Please select a department.";
    valid = false;
  }


  let terms = document.getElementById("terms").checked;
let termsError = document.getElementById("termsError");

if (!terms) {
  termsError.textContent = "You must agree to the terms.";
  valid = false;
} else {
  termsError.textContent = "";
}



  if(valid){
    successMessage.textContent = 'Your message has been sent successfully!';
    document.getElementById('contactForm').reset();

  
    setTimeout(() => {
      successMessage.textContent = "";
    }, 4000);
  }

  return false; 
}

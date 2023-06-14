const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

// Handle signup form submission
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const email = document.querySelector(".user-login").value;
  const password = document.querySelector(".user-password").value;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    alert("Registration successful!");
    // Redirect or update UI according to your application logic.
  } catch (error) {
      console.error(error);
      alert(error.message);
  }
});

// Handle signin form submission
signinForm.addEventListener("submit", async (e) => {
   e.preventDefault();
   
   const email = document.getElementById("signin-email").value;
   const password = document.getElementById("signin-password").value;

   try {
       await firebase.auth().signInWithEmailAndPassword(email, password);
       alert('Login successful!');
       // Redirect or update UI according to your application logic.
   } catch (error) {
       console.error(error);
       alert(error.message);
   }
});
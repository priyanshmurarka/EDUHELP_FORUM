document.getElementById("log-in").addEventListener("submit", (event) => {
  event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("home1.html");
  } 
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // if (errorCode === 'auth/invalid-credential') {
        //     alert('Wrong password.');} 
             if (errorCode === 'auth/internal-error') {
            alert('Wrong user credentials.');
        }
        console.log(error);
    });
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;
  if (email.endsWith("@iitism.ac.in")) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // Handle errors here
            if (errorCode === 'auth/email-already-in-use') {
                alert('Email already in use.');} 
                else {
                console.log(errorCode, errorMessage);
            }});
} else {
    alert("Please use your Instiute email to sign up.");
}
}

function forgotPass() {
  const email = document.getElementById("email").value;
  if(email === ""){
    alert ("Enter your registered email.")
  }
  else{
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email id.");
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;
    });}
}

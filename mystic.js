firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
            location.replace("home.html")
}
});

function logout() {
  firebase.auth().signOut();
}






const firebaseConfig = {
  apiKey: "AIzaSyCmDfRnNUiLP4bEZNLzfRKcrXGi4OW1KKQ",
  authDomain: "eduhelp-forum-762ba.firebaseapp.com",
  projectId: "eduhelp-forum-762ba",
  storageBucket: "eduhelp-forum-762ba.appspot.com",
  messagingSenderId: "402890775000",
  appId: "1:402890775000:web:8d90c32abb9ba5933bbaad",
  measurementId: "G-ZHGT0BPPTM"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var storage = firebase.storage();


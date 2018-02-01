import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCfN93IgCJM6Af_asx_RCZTqq7_gq51hXY",
  authDomain: "khalid-react-chat-app.firebaseapp.com",
  databaseURL: "https://khalid-react-chat-app.firebaseio.com",
  projectId: "khalid-react-chat-app",
  storageBucket: "",
  messagingSenderId: "704247186442"
};
firebase.initializeApp(config);

const fire = firebase;

const register = () => {

  var email = "abcd@gmail.com"
  var pasword = "123456"

  fire.auth().createUserWithEmailAndPassword(email, pasword).then((user) => console.log(user)).catch(err => console.log(err))

}
const login = () => {

  var email = "abcd@gmail.com"
  var pasword = "123456"

  fire.auth().signInWithEmailAndPassword(email, pasword).then((user) => console.log(user,"login user")).catch(err => console.log(err))

}


export {
  fire,
  register,
  login
}
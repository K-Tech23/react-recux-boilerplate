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

const signupUser = (user) => {

  fire.
    auth().
    createUserWithEmailAndPassword(user.email, user.password).
    then((user) => console.log(user)).
    catch(err => console.log(err))

}
const loginUser = (user) => {

  console.log(user.password, "user")
  fire.
    auth().
    signInWithEmailAndPassword(user.email, user.password).
    then((user) => {
      console.log(user, "login user")
    }).
    catch(err => console.log(err))

}


export {
  fire,
  signupUser,
  loginUser
}
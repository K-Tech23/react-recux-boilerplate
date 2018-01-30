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



  export {
    fire
  }
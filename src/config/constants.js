import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBS1Uf_Lp1EeoosNcfMbrFNtNrIeHYNTPo",
    authDomain: "todolist-223704.firebaseapp.com",
    databaseURL: "https://todolist-223704.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

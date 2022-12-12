// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDzppALVR3dAJKH35KFjxemkpRBEIQ4Ejc",
    authDomain: "letschat-adf38.firebaseapp.com",
    databaseURL: "https://letschat-adf38-default-rtdb.firebaseio.com",
    projectId: "letschat-adf38",
    storageBucket: "letschat-adf38.appspot.com",
    messagingSenderId: "795608681777",
    appId: "1:795608681777:web:9ca97e18fb9f24be9eb410",
    measurementId: "G-GDVTFWWYNX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}






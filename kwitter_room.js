var firebaseConfig = {
    apiKey: "AIzaSyC8dAW5F2vXuUbaPrtmhwGb8lqHEpDU2CU",
    authDomain: "kwitter-48121.firebaseapp.com",
    databaseURL: "https://kwitter-48121-default-rtdb.firebaseio.com",
    projectId: "kwitter-48121",
    storageBucket: "kwitter-48121.appspot.com",
    messagingSenderId: "195460584655",
    appId: "1:195460584655:web:ac39a019cbb2f1d889d3ba",
    measurementId: "G-NT9S3G9NY2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
 {
   room_name = document.getElementById("room_name").value;
   
   firebase.database().re("/").child(user_name).update({
    purpose : "adding room name"
});

localStorage.setItem("user_name",user_name);

windowwindow.location = "kwitter_room.html";
}

function getData() {   firebase.database().ref("/").on('value', function (snapshot) 
{document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot)
{childKey  = childSnapshot.key;
        Room_name = childKey;
        console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName' >#"+ Room_names +"</div><hr>"
     document.getElementById("output").innerHTML += row;
  });
});  
}

getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";  
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter_room.html");
  }
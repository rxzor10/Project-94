
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()
{
window.location.replace(index.html)

}
function addRoom()
{
      room_name = document.getElementById ("room_name").value;
      localStorage.setItem ("room_name", room_name);
      window.location="kwitter_room.html";

}
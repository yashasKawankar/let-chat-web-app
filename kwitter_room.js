function ADDroom()
{
 room_name = docume.getelementbyid("Room_name").value;
 firebase.database().ref("/").child(Room_names).update{(
      purpose :"adding room name"
      )};
      localStorage.setitem("room_name", room_name);
      wimdow.location= "kwitter_room.html"
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name -"+ room_names);
      row = "<div class="roomname" id="+room_names+" onclick=redirecttoroomname(thisid)> #"+room_name  </div>  <hr>
      document.getElementById("output").innerhtml += row
      //End code
      });});}
getData();
}
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setitem("Room_name", name)
      window.location= "kwitter_room.html"
}
      
 function logout(){
 localstorage.removeitem("user_name")
 localstorage.removeitem("room_name")
 window.location = kwitter.html
}
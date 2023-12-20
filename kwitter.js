function adduser(){

    user_name=document.getElementById("user_name").value;
    localStorage.setitem("user_name",user_name);
    windowlocation="kwitter_room.html";
}
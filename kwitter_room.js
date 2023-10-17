var firebaseConfig = {
      apiKey: "AIzaSyAwn0r6vggHiVDFJti94WNcVP3iEYbTT2Q",
      authDomain: "kwitter-ec327.firebaseapp.com",
      databaseURL: "https://kwitter-ec327-default-rtdb.firebaseio.com",
      projectId: "kwitter-ec327",
      storageBucket: "kwitter-ec327.appspot.com",
      messagingSenderId: "328919239213",
      appId: "1:328919239213:web:216c1dc8c9880e4f4986a4"
    };
    
  
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" Welcome "+ user_name +"!" 

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

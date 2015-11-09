$(document).ready(function(){
  $("#submit").click(function(){
    var elt = document.getElementById("CreateAccount");
    var name = elt.username.value;
    var pass = elt.pass.value;
    var confirmpass = elt.confirmpass.value;

    if (name.length>10 ||
      name.length<6 ||
      name.search(/[a-z]/i) != 0 ||
      name.search(/[^A-Za-z0-9]/) != -1 ||
      pass != confirmpass ||
      pass.length>10 ||
      pass.length<6 ||
      pass.search(/\W/) != -1 ||
      pass.search(/[a-z]/) == -1||
      pass.search(/[A-Z]/) == -1||
      pass.search(/[0-9]/) == -1
      ) 
    {
      alert("Invalid Input");
    } else {
      alert("Passed Validation");
    }
  });
});
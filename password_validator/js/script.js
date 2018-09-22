function validatePassword(){
  let p = document.getElementById("password").value;
  let p_conf = document.getElementById("password_conf").value;

  // the passwords entered don't match
  if (p != p_conf){
    console.log(p);
    console.log(p_conf);
    alert("Passwords don't match, please try again");
    document.getElementById("valid").style.visibility="hidden";
  }
  // the passwords are not at least 8 characters long
  else if (p.length <8){
    alert("Passwords must be at least 8 characters long");
    document.getElementById("valid").style.visibility="hidden";
  }

  else{
    document.getElementById("valid").style.visibility="visible";
  }
}

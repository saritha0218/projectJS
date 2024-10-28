document.getElementById("formdetails").addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("un").value;
    let password = document.getElementById("pw").value;
    let confirmPassword = document.getElementById("cpw").value;
    let email = document.getElementById("mail").value;
    let number = document.getElementById("tel").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (!Array.isArray(users)) {
          users = []; 
    }
    
    let userfound = users.find(user => user.username === username);
    let emailfound = users.find(user => user.email === email );
    let numberfound = users.find(user => user.number === number );

      if(userfound){
        alert("Username already exists. Please try again.");
      }
      else  if(emailfound){
        alert("User email already exists. Please try again.");
      }
      else  if(numberfound){
        alert("User number email already exists. Please try again.");
      }
      else{
        let user = {
        username: username,
        password: password,
        email: email,
        number: number
        };
        users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = './index.html';

    }
 });
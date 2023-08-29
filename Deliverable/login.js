function loginValidation(form){
    var username = form.username.value;
    var password = form.password.value;
    
    if(username.length===0){
        alert("please enter a username");
        return false;
    }
    if(username.length<=8){
        alert("please 8 digits user name");
        return false;
    }
    if(password.length===0){
        alert("please enter a username");
        return false;
    }
    if(password.length<=8){
        alert("please 8 digits password");
        return false;
    }
}

function registerValidation(){

    // first name 
    const fname = document.getElementById('fn').value;
    
    // Last Name
    const lname = document.getElementById('ln').value;
    
    //email
    const totalemail = document.getElementById('mail').value;
    var atposition = totalemail.indexOf('@');
    var dotposition = totalemail.indexOf('.');

    //password 
    const password = document.getElementById('password').value;

    //confirm password

    const confirmpassword = document.getElementById('confirmpassword').value;
    // var password_confirm = document.getElementById('conpass').value

    
    if(fname.length===0){
        alert("please enter a firstname");
        return false;
    }
    if(lname.length===0){
        alert("please enter a lastname");
        return false;
    }

    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=myemail.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    } 
    if(password.length===0){
        alert("enter valid password");
        return false;
    }
    if(confirmpassword.length===0){
        alert("enter valid password");
        return false;
    }

if(password !== confirmpassword){
    alert('password do not match');
    return false;
}  
}

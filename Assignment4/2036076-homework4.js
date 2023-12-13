//DATE//
const d = new Date();
    let doutput = d.toLocaleDateString();
    document.getElementById("today").innerHTML = doutput;


//First name validation//
    function fnameValidation(){
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[A-Za-z'-]+$/;
//Check if name is empty//
    if(fname == ""){
        document.getElementById("fname-error").innerHTML = 
        "First name must not be empty";
        return false;
      }   
        else if(fname != ""){
            //Check if name match pattern
            if(!fname.match(namePattern)){                              
                document.getElementById("fname-error").innerHTML = 
                "Letters, apostrophes, and dashed only";
                return false;
            } 
            else if(fname.length < 2){
                document.getElementById("fname-error").innerHTML = 
                "First name must be at least 2 characters";
                return false;
            }
            
            else if(fname.length < 30){
                document.getElementById("fname-error").innerHTML = 
                "First name must not exceed 30 characters";
                return false;
            }
            
            else{
                document.getElementById("fname-error".innerHTML) = "";
                return true;
            }   
        }
    }


//Lastname Validation//
function lnameValidation(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[A-Za-z2-5'-]+$/;
//Check if name is empty//
    if(lname == ""){
        document.getElementById("lname-error").innerHTML = 
        "Last name must not be empty";
        return false;
      }   
        else if(lname != ""){
            //Check if name match pattern
            if(!lname.match(namePattern)){                              
                document.getElementById("lname-error").innerHTML = 
                "Letters, apostrophes, and dashed only";
                return false;
            } 
            else if(lname.length < 2){
                document.getElementById("lname-error").innerHTML = 
                "Last name must be at least 2 characters";
                return false;
            }
            
            else if(lname.length < 30){
                document.getElementById("lname-error").innerHTML = 
                "Last name must not exceed 30 characters";
                return false;
            }
            
            else{
                document.getElementById("lname-error".innerHTML) = "";
                return true;
            }   
        } 
}

//MIDDLE INITIAL VALIDATION//
 function mnameValidation(){
    mname = document.getElementById("mname").value;
    var namePattern = /^[A-Z]/;

    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;

    if(mname.length > 0){
        if(!mname.match(namePattern)){
            document.getElementById("mname-error").innerHTML = 
            "Invalid Middle Intial";
            return false;
        }
        else{
            document.getElementById("mname-error").innerHTML = "";
            return false;
        }
    }
    return false;
 }

 function emailValidation(){
    email = document.getElementById("email").value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email == ""){
        document.getElementById("email-error").innerHTML = "Email address must not be empty";
        return false;
    }
    else if(!email.match(emailPattern)){
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid email address";
        return false;
    } else{
        document.getElementById("email-error").innerHTML = "";
        return true;
    }

 }

//DOB//
function validateDob(){
 dob = document.getElementById("dob");
 let date = new Date(dob.value);
 let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

 if(date > new Date()){
     document.getElementById("dob-error").innerHTML = "Date can not be in the future";
     dob.value = "";
     return false;
    
  }
   else if(date < new Date(maxDate)){
    document.getElementById("dob-error").innerHTML = "Date can not be more than 120 years ago";
    dob.value = "";
    return false;
   }

   else{
    document.getElementById("dob-error").innerHTML = "";
    return true;
   }
 
}


//SSN//

function validateSSN(){
    var ssn = document.getElementById("ssn").value;

//Insert a hyphen after every 3 and 5 digits 
ssn = ssn.replace(/(\d{3})(\d{2})/g, "$1-$2-");
document.getElementById("ssn").value = ssn;

//Regular expression to write SSN//
    const ssnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;

if(!ssnRegex.test(ssn)){
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number (e.g 123-45-6789) ";
        return false; 
    } else 
    document.getElementById("ssn-error").innerHTML = "";
    return true;
}

//PHONE NUMBER//

function validatePhone(){
 const phoneInput = document.getElementById("phone");
 const phone = phoneInput.value.replace(/\D/g,""); //Removes all non digit characters

 if(phone.length!==10){
    document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
    return false;
 }

const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6);
phoneInput.value = formattedPhone; 
document.getElementById("phone-error").innerHTML="";
return true;

}
// Address Validation //
function addressValidation(){
    address = document.getElementById("address1").value.trim();

    if(!address){
        document.getElementById("address-error").innerHTML = "Address is required";
        return false;
    } else{
        document.getElementById("address-error").innerHTML = "";
        return true; 
    }
}

// City Validation //
function cityValidation(){
    city = document.getElementById("city").value.trim();

    if(!city){
        document.getElementById("city-error").innerHTML = "City is required";
        return false;
    } else{
        document.getElementById("city-error").innerHTML = "";
        return true; 
    }
}




//ZIP Code//

function validateZipCode(){
    const zipInput = document.getElementById("zip");
    let zip= zipInput.value.replace(/[^\d-]/g,""); // Remove all non digits and non-hyphen characters
    
    if(!zip){
        document.getElementById("zip.error").innerHTML =  "Zip code is required"; 
        return false;
    }
    
    if(zip.length > 5){
        zip = zip.slice(0,5); //Only keep the first 5 digit 
    }

    zipInput.value = zip; 
    document.getElementById("zip-error").innerHTML = "";
    return true; 
}

//USER ID//
function validateUserId(){
    userId = document.getElementById("userid").value;

//Covert UserID to lowercasee
    userId = userId.toLowerCase();
    
//Redisplay the UserId in lowercase
    document.getElementById("userid").value = userId;

    if(userId.length ===0){
    document.getElementById("userid-error").innerHTML = "User ID can not be empty";
    return false;
    }

    if(!isNaN(userID.charAt(0))){
        document.getElementById("userid-error").innerHTMl = "User ID cam not start with a number";
        return false;
    }
//Check that USer ID only contain letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if(!regex.test(userId)){
        document.getElementById("userid-error").innerHTML = "User ID can only contain letters, numbers, or underscores";
        return false;
    } else if(userId.length < 5){
        document.getElementById("userid-error").innerHTML = "USer ID must be at least 5 characters";
        return false; 
    }
    else if(userId.length > 30){
    document.getElementById("userid-error").innerHTML = "User ID must not exceed 30 characters";
    return false;
    }
    else{
        document.getElementById("user-error").innerHTML = "";
        return true; 
    }
}

//PASSWORD//
 function validatePassword(){
    const pwd = document.getElementById("pwd").value;
    const user = document.getElementById("userid").value;
    

    //Initialize an array
    const errorMessage = [];


    //validate lowercase letters
    if(!pwd.match(/[a-z]/)){
      errorMessage.push("Enter at least 1 lowercase letter.");
    }

    //Check for capital letters
    if(!pwd.match(/[A-Z]/)){
        errorMessage.push ("Enter at least 1 capital letter");
    }

    // Check for numbers
    if(!pwd.match(/[0-9]/)){
    errorMessage.push ("Enter at least 1 number");
    }


    //Check for Special Character
    if(!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)){
    errorMessage.push ("Enter at least 1 special character");
    }

    //Check for length
    if(pwd.length < 8){
    errorMessage.push ("Enter a minimum of 8 characters");
    }

    //Check password cannot equal UserID
    if(pwd == user || pwd.includes(user)){
    errorMessage.push ("Password cannot equal UserID");
    }
//Display error Messages if there any

const errorContainer = document.querySelector(".pwd-message");
errorContainer.innerHTML = errorMessage
.map((message)=> `<span>${message}</span><br/>`)
.join("");

//Return true if no error
return errorMessags.length === 0;
 }
    // Confirm Password /
    function confirmPassword(){
        pwd1 = document.getElementById("pwd").value;
        pwd2 = document.getElementById("pwd2").value;

        if(pwd2 != pwd1){
            document.getElementById("pwd2-error").innerHTML = "Password do not match";
            return false;
        } 
        else{
            document.getElementById("pwd-error").innerHTML = "";
            return true;
        }

 }

 //Re-display user input//

 function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var datatype;
    var i;
    formoutput = "<table class='output'><th colspan = '3'> Your Information</th>";
    for (i = 0; i < formcontent.length; i++) {
      if (formcontent.elements[i].value != "") {
        datatype = formcontent.elements[i].type;
        switch (datatype) {
          case "checkbox":
            if (formcontent.elements[i].checked) {
              formoutput =
                formoutput +
                "<tr><td align='right'>" +
                formcontent.elements[i].name +
                "</td>";
              formoutput =
                formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
            }
            break;
          case "radio":
            if (formcontent.elements[i].checked) {
              formoutput =
                formoutput +
                "<tr><td align='right'>" +
                formcontent.elements[i].name +
                "</td>";
              formoutput =
                formoutput +
                "<td class='outputdata'>" +
                formcontent.elements[i].value +
                "</td></tr>";
            }
            break;
          case "button":
          case "submit":
          case "reset":
            break;
          default:
            formoutput =
              formoutput +
              "<tr><td align='right'>" +
              formcontent.elements[i].name +
              "</td>";
            formoutput =
              formoutput +
              "<td class = 'outputdata'>" +
              formcontent.elements[i].value +
              "</td></tr>";
        }
      }
    }
  
    if (formoutput.length > 0) {
      formoutput = formoutput + "</table>";
      document.getElementById("showInput").innerHTML = formoutput;
    }
  }

 //Remove User Input//

 function removeReview(){
    document.getElementById("showInput").innerHTML = "";
 }

 function showAlert(){
    var alertBox = document.getElementById("alert-box");
    var closeBtn = document.getElementById("close-alert");
    alertBox.style.display = "block";
    closeBtn.onclick = function () {
     alertBox.style.display="none";
    };
}

function validateAll(){
let valid = true;

if(!fnameValidation()){
    valid = false;
}
if(!lnameValidation()){
    valid = false;
}
if(!mnameValidation()){
    valid = false;
}
if(!emailValidation()){
    valid = false;
}
if(!validateDob()){
    valid = false;
}
if(!validateSSN()){
    valid = false;
}
if(!validatePhone()){
    valid = false;
}
if(!addressValidation()){
    valid = false;
}
if(!cityValidation()){
    valid = false;
}
if(!validateZipCode()){
    valid = false;
}
if(!validateUserId()){
    valid = false;
}
if(!validatePassword()){
    valid = false;
}
if(!confirmPassword()){
    valid = false;
}

if(valid){
document.getElementById("submit").disabled = false;
}
else{
    showAlert();
}
}

////////STICK HEADER////////
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 0){
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }  
});

/////COOKIE////////

function setCookie(name, cvalue, expriryDays){
    var day = new Date();
    day.setTime(day.getTime()+ expriryDays * 24 * 60  * 60 *  1000);
    var expires = "expires =" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
function getCoookie(name){
    var cookieName = name + "="; 
    var cookies = document.cookies.split(";");

    for( var i = 0; i , cookies.length; i++){
        var cookie = cookie[i];
        while (cookie.charAt(0) == ""){
        cookie = cookie.substring(1);
    }
    if(cookie.indexOf(cookieName)==0){
        return cookie.substring(cookieName.length, cookie.length);
        }
    }       
    return "";
}

var input = [
{ id: "fname", cookieName: "firstName"},
{ id: "lname", cookieName: "lastName"},
{ id: "mname", cookieName: "middleName"},
{ id: "email", cookieName: "email"},
{ id: "phone", cookieName: "phone"},
{ id: "dob", cookieName: "dateofbirth"},
{ id: "address1", cookieName: "address1"},
{ id: "address2", cookieName: "address2"},
{ id: "city", cookieName: "city"},
{ id: "zip", cookieName: "zipCode"},
{ id: "sedan", cookieName: "sedan"},
{ id: "suv", cookieName: "suv"},
{ id: "truck", cookieName: "truck"},
{ id: "sports", cookieName: "sports"},
{ id: "van", cookieName: "van"},
{ id: "other", cookieName: "other"},
{ id: "yes", cookieName: "yes"},
{ id: "no", cookieName: "no"},
{ id: "userid", cookieName: "userID"},
];

inputs.forEach(function(input){
    var inputElement = docment.getElementById(input.id);

    //Prefill input field with the value stores in the corresponing cookie
    var cookieValue = getCookie(input.cookieName);
    if(cookieValue !== ""){
        inputElement.value = cookieValue;
    }

    //Set a cookie with the value of the input field whenever it is changed
    inputElement.addEventListener("input", function(){
        setCookie(input.cookieName, inpurElement.value, 30);

    });
});

//Greet the user if a first name cookie is set
var firstName = getCookie("firstName");
if(firstName !==""){
        document.getElementById("hello1").innerHTML = "Welcome back" + 
        firstName + "!<br>";
        document.getElementById("hellos").innerHTML = "<a href= '#' id='new user'>Not " + 
        firstName + "? Click here to start a new form. </a>";

        document.getElementById("new-user").addEventListener("click", function(){
            inputs.forEach(function(input){
            setCookie(input.cookieName, "", -1);
            });
            location.reload();
    });

}

 
 
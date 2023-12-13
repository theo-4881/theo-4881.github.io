//DATE//
const d = new Date();
    let doutput = d.toLocaleDateString();
    document.getElementById("today").innerHTML = doutput;

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
    const ssn = document.getElementById("ssn").value;
//Regular expression to write SSN//
    const ssnRegex = /^(\d{3})-?(\d{2})-?(\d{4})$/;

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

    let errorFlag = 0;

    if(!pwd.match(/[a-z]/)){
        document.getElementById("msg1").innerHTML = "Enter at least 1 lowercase letter";
        errorFlag = 1; 
    }
    else{
        document.getElementById("msg1").innerHTML = "";
    }

    //Check for capital letters
    if(!pwd.match(/[A-Z]/)){
    document.getElementById("msg2").innerHTML = "Enter at least 1 capital letter";
    errorFlag = 1;
    }
    else{
        document.getElementById("msg2").innerHTML = "";
    }

    if(!pwd.match(/[0-9]/)){
        document.getElementById("msg3").innerHTML = "Enter at least 1 number";
        errorFlag = 1;
        }
        else{
            document.getElementById("msg3").innerHTML = "";
        }

    //Check for Special Character
     if(!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)){
        document.getElementById("msg4").innerHTML = "Enter at least 1 special character";
        errorFlag = 1;
            }
            else{
                document.getElementById("msg4").innerHTML = "";
            }

        //Check for length
        if(pwd.length < 8){
            document.getElementById("msg5").innerHTML = "Enter a minimum of 8 characters";
            errorFlag = 1;
        } else {

            document.getElementById("msg5").innerHTML = "";
        }

        //Check password cannot equal UserID
        if(pwd == user || pwd.includes(user)){
            document.getElementById("msg6").innerHTML = "Password cannot equal UserID";
            errorFlag = 1;
        }
        else {

            document.getElementById("msg6").innerHTML = "";
        }

        //If theres no errors display nothing
         if(errorFlag === 0){
            document.getElementById("msg3").innerHTML = "Valid Password";
         }
        }
    // Confirm Password //
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
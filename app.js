
// TASK 1

function changeShape(value){
    document.getElementById("shape").className=value
    
    
}


// TASK 2

function add() {

    var num = document.getElementById('number').value;
    var zip = document.getElementById('zip').value;

    if(document.getElementById('f_name').value===""){
        alert("FIRST NAME FIELD IS EMPTY! Please fill this field to proceed");
    }
    else if(document.getElementById('l_name').value===""){
        alert("LAST NAME FIELD IS EMPTY! Please fill this field to proceed");
    }
    else if(document.getElementById('email').value===""){
        alert("Email IS EMPTY! Please fill this field to proceed");
    }
    else if (document.getElementById('number').value === ""){
        alert(" number must be filled out.");
     }
    else if(isNaN(num)){
       alert(" only number allow.");
         }
    else if (num.length<11 || num.length >11){
            alert(" Mobile Number must be required 11 digit.");
        }
        else if (zip.length <5 || zip.length >5){
            alert("Zip code must have 5 digits.");
        }
    
}

function showDetails(){

var inp1 = document.getElementById("f_name")
    var inp2 = document.getElementById("l_name")
    var inp3 = document.getElementById("email")
    var inp4 = document.getElementById("number")
    var inp5 = document.getElementById("zip")
    document.write("First name is: " + f_name.value + "<br>" + "Last name is: " +
     l_name.value + "<br>" + "Email is: " + email.value + "<br>" + "Phone no is: "+ number.value + "<br>" + 
     "Zip-code is: "+ zip.value + "<br>")

}
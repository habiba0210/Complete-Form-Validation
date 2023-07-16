var getId=(id)=>{
    return document.getElementById(id);
}

var getClass=(classes)=>{
    return document.getElementsByClassName(classes);
}


var firstName=getId('firstName'),
lastName=getId('lastName'),
email=getId('email'),
password=getId('password'),
form=getId('myForm'),
button=getId('btn');
sts=getId('sts');

errMsg=getClass('error');


form.addEventListener('submit',(event)=>{
     event.preventDefault(); //prevent default submission,I'll submit it by my way
     var fNameValid=customValidator(firstName,0,'First Name is Manadatory*');
     var lNameValid=customValidator(lastName,1,'Last Name is Manadatory*');
     var emailValid=customValidator(email,2,'Email is Manadatory*');
     var passwordValid=customValidator(password,3,'Password is Manadatory*');

     console.log(fNameValid,lNameValid,emailValid,passwordValid);

     if(fNameValid==true && lNameValid == true && emailValid==true && passwordValid==true)
     {
        var finalObject={};
        finalObject['First Name']=firstName.value;
        finalObject['Last Name']=lastName.value;
        finalObject['Email']=email.value;
        finalObject['Password']=password.value;
        localStorage.setItem('userInfo',JSON.stringify(finalObject));
        sts.textContent='Submitting Form. Please Wait !!!';
        setTimeout(()=>{
            sts.textContent='Form Submitted Successfully!!';
        },4000); 
    }
     
    
})

function customValidator(documentId,classId,errorMessage){
    // console.log("DocumetRef",documentId);
    // console.log("Class",classId);
    // console.log("Error Msg",errorMessage);
    if(documentId.value.trim() ==''){
        documentId.style.border='2px solid red';
        errMsg[classId].textContent=errorMessage;
        return false;
    }else{
        documentId.style.border='2px solid green';
        errMsg[classId].textContent='';
        return true;
    }
}


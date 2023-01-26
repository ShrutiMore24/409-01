let firstname=document.getElementById('firstName');
let lastName=document.getElementById('lastName');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
let telephone=document.getElementById('telephone');
let bio= document.getElementById('bio');
// let flag=0;
let FError=false;
let LError=false;
let MError=false;
let PError=false;
let TError=false;
let BError=false;



function firstnamekey(){
    let firstnameError=document.getElementById('firstnameError');

    if(firstname.value==""){
        // flag=0;
        FError=false;
        firstname.setAttribute('style',"border: 2px solid red;outline:none;")
        firstnameError.innerHTML = `First name must be alphabatic and contain 3-16 character`
    }
    else{
        firstnameError.innerHTML = "";

        if(/^[A-Z]\w*$/.test(firstname.value) == false){
            // flag=0;
            FError=false;
            firstname.setAttribute('style',"border: 2px solid red;outline:none;")
            firstnameError.innerHTML = `First latter should be capital`
            }
            else{
                firstnameError.innerHTML = "";
    
                // if((firstname.value).length<3){
                    if(/[a-z]{3,16}$/.test(firstname.value) == false){
                    // flag=0;
                    FError=false;
                    firstname.setAttribute('style',"border: 2px solid red;outline:none;")
                    firstnameError.innerHTML = `Letter contain must be 3-16 characters`;
                }
                else{
                    // flag=1;
                    FError=true;
                    firstname.setAttribute('style',"border: 2px solid #21bf73;outline:none;")
                    firstnameError.innerHTML = "";
    
                }
            }
    }

}
function lastnamekey(){
    let lastnameError=document.getElementById('lastnameError');
    if( lastName.value=="" ){
        // flag=0;
        LError=false;
        lastName.setAttribute('style',"border: 2px solid red;outline:none;")
        lastnameError.innerHTML = `Last name must be alphabatic and contain 3-16 character`
    }
    else{
        lastnameError.innerHTML = "";

        if(/^[A-Z]\w*$/.test(lastName.value) == false){
            // flag=0;
            LError=false;
            lastName.setAttribute('style',"border: 2px solid red;outline:none;")
            lastnameError.innerHTML = `First latter should be capital`
            }
            else{
                lastnameError.innerHTML = "";
    
                if(/[a-z]{3,16}$/.test(lastName.value) == false){
                    // flag=0;
                    LError=false;
                    lastName.setAttribute('style',"border: 2px solid red;outline:none;")
                    lastnameError.innerHTML = `Letter contain must be 3-16 characters`;
                }
                else{
                    // flag=1;
                    LError=true;
                    lastName.setAttribute('style',"border: 2px solid #21bf73;outline:none;")
                    lastnameError.innerHTML = "";
    
                }
            }


    }

}
function mailkey(){
    let emailError=document.getElementById('emailError');
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/.test(mail.value) == false){
        // flag=0;
        MError=false;
        mail.setAttribute('style',"border: 2px solid red;outline:none;")
        emailError.innerHTML=`Please Enter valid Email ID`;
    }
    else{
        // flag=1;
        MError=true;
        mail.setAttribute('style',"border: 2px solid #21bf73;outline:none;")
        emailError.innerHTML="";
    }
}
function passwordkey(){
    let passwordError=document.getElementById('passwordError');

    if(password.value==""){
        // flag=0;
        PError=false;
        password.setAttribute('style',"border: 2px solid red;outline:none;")
        passwordError.innerHTML=`<span>Enter valid Password. password must be Alphabtic <br> and
        special characters allowed and letter contain 6-16 characters</span> `
    }
    else{
        passwordError.innerHTML="";
        if(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password.value)==false){
            // flag=0;
            PError=false;
            password.setAttribute('style',"border: 2px solid red;outline:none;")
            passwordError.innerHTML=`Use special characters and number `
        }
        else{
            // flag=1;
            PError=true;
            password.setAttribute('style',"border: 2px solid #21bf73;outline:none;")
            passwordError.innerHTML="";
        }
    }


}
function telephonekey(){
    let telephoneError=document.getElementById('telephoneError');

    if((telephone.value === "" || /^\w{10,10}\d+$/.test(telephone.value) == false)){
        // flag=0;
        TError=false;
        telephone.setAttribute('style',"border: 2px solid red;outline:none;")
        telephoneError.innerHTML=`A valid Telephone number 11 digits`
    }
    else{
        telephoneError.innerHTML="";
        if(telephone.value.length >11||telephone.value.length <11){
            // flag=0;
            TError=false;
            telephone.setAttribute('style',"border: 2px solid red;outline:none;")
            telephoneError.innerHTML=`you enter more than 11 number check once again`
        }
        else{
            // flag=1;
            TError=true;
            telephone.setAttribute('style',"border: 2px solid #21bf73;outline:none;")
            telephoneError.innerHTML="";
        }
    }
}
function biokey(){
    let bioError=document.getElementById('bioError');
    
    if(bio.value=="" || /^[a-z- _]{8,50}$/.test(bio.value)==false){
        // flag=0;
        BError=false;
        bio.setAttribute('style',"border: 2px solid red;outline:none;")
        bioError.innerHTML=`<span>Bio must be contain only lowercase letter, <br>underscore,hypens
        and 8-50 character</span>
        `;
    }
    else{
        // flag=1;
        BError=true;
        bio.setAttribute('style',"border: 2px solid #21bf73;outline:none;")
        bioError.innerHTML="";
        
    }

}

function submitData(){
    let button=document.getElementById('btn');
    if(FError==true && LError==true && MError==true && PError==true && TError==true && BError==true){
        button.setAttribute('style','background:#21bf73')
    }
    else{
        button.setAttribute('style','background:rgb(228, 76, 21)')
    }
}


let input = document.getElementById('er')
let text = document.getElementById('text')
let button = document.getElementById('but')
let er_img = document.getElementById('er')
let flag =1;


function validate(){
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let a = document.myForm.Email.value;

    if (a.match(format)) //checking the format of the email
    {
        text.innerText="";
        flag=1;
    }
    else{ //format doesn't match 
        text.innerText="Please provide a valid email"
        flag=0;
    }

    if(flag===1){
        er_img.style.visibility = 'hidden'
        return true;
    }
    else {
    er_img.style.visibility = 'visible'
    return false;
    }
  
}
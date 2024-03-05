let logo = document.getElementById('MS-logo');
logo.addEventListener('click' ,()=>{
return location.reload();
});

// Navbar Links 
// nav-item1 
const navItem1 = document.getElementById('n-item1');
function nlink1(){
    let link1 = "https://www.microsoft.com/en-in/microsoft-365";
window.location.href = link1;
}
navItem1.addEventListener('click' , nlink1);
//nav-item2
const navItem2 = document.getElementById('n-item2');
function nlink2(){
    let link2 = "https://www.microsoft.com/en-in/microsoft-teams/group-chat-software";
    window.location.href = link2;
}
navItem2.addEventListener('click' , nlink2);
// nav-item3 
const navItem3 = document.getElementById('n-item3');
function nlink3(){
    let link3 = "https://copilot.microsoft.com/";
    window.location.href = link3;
}
navItem3.addEventListener('click' , nlink3);
// nav-item4 
const navItem4 = document.getElementById('n-item4');
function nlink4(){
    let link4 = "https://www.microsoft.com/en-in/windows/";
    window.location.href = link4;
}
navItem4.addEventListener('click',nlink4);
//nav-item5
const navItem5 = document.getElementById('n-item5');
function nlink5(){
    let link5 = "https://www.microsoft.com/surface";
    window.location.href = link5;
}
navItem5.addEventListener('click',nlink5);
// nav-item6 
const navItem6 = document.getElementById('n-item6');
function nlink6(){
    let link6 = "https://www.xbox.com/";
    window.location.href = link6;
}
navItem6.addEventListener('click',nlink6);
// nav-item7 
const navItem7 = document.getElementById('n-item7');
function nlink7(){
    let link7 = "https://support.microsoft.com/en-in";
    window.location.href = link7;
}
navItem7.addEventListener('click',nlink7);

//login-item
const login = document.querySelector('#login');
function log(){
    let link8 = "https://www.microsoft.com/rpsauth/v1/account/SignIn?ru=https%3A%2F%2Fwww.microsoft.com%2Fen-in%2F";
    window.location.href = link8;
}
login.addEventListener('click',log);

//reloading logic on clicking on each list element


function formValidation(){

var uemail = document.myform.email;
var uname = document.myform.username;
var passid = document.myform.password;
if(allLetter(uname)){
if(ValidateEmail(uemail)){
if(passid_validation(passid,7,12)){
}
    
}
}return false;
}
function ValidateEmail(uemail)
{
var mailformat = /^[\w!#$%& '*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
if(uemail.value.match(mailformat))
{
return true;
localStorage.setItem("uemail","uemail");
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
<script>    
function validate() {    
    var firstname = document.reg_form.firstname;    
    var lastname = document.reg_form.lastname;      
    var email = document.reg_form.email;    
    var password = document.reg_form.password;    
    var confirmpassword = document.reg_form.confirmpassword; 
    var contactnumber = document.reg_form.contactnumber;      

    if (firstname.value.length == 0) {    
        alert("Name is required");    
        firstname.focus();    
        return false;    
    &rbrace;    
    if (lastname.value.length == 0) {    
        alert("Last Name is required");    
        lastname.focus();    
        return false;    
    &rbrace;     
    if (email.value.length == 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    &rbrace;    
    if (password.value.length == 0) {    
        alert("password is required");   
        password.focus();    
        return false;    
    &rbrace;    
    if (confirmpassword.length ==0) {    
        alert("confirmpassword is required");    
        confirmpassword.focus();    
        return false;    
    &rbrace;  
   if (contactnumber.value.length == 0) {    
        alert("contactnumber is required");    
        contactnumber.focus();    
        return false;        
    &rbrace;    
</script>    
//Use RegEx to validate form
function validate(){

  /* Henter inputtene*/
  var myName = document.getElementById('name').value;
  var myLastName = document.getElementById('name-last').value;
  var myEmail = document.getElementById('email').value;
  var myPhone = document.getElementById('phone-number').value;

   /* regular expressions, Fornavn og Etternavn deler regExp og email og phone har egne*/
  var nameReg = /^[a-z ,.'-]+$/i ;
  var emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
  var phoneReg = /^[0-9]{8}$/;

/*Tester regular expressions opp mot informasjonen brukeren entrer inn i skjemaet */
 var nameResult = nameReg.test(myName);
 var lastNameResult = nameReg.test(myLastName);
 var emailResult = emailReg.test(myEmail);
 var phoneResult = phoneReg.test(myPhone);

/*  lager if setninger: hvis regular expression ikke er sant, så kommer det en alert til hvilke del som ikke er true. Tester det for hvert input felt.
Flere av inputtene kan være usanne, men det er bare den første "alerten som vil komme opp siden scriptet blir stoppet når den ser en første alerten" */
 if(nameResult == false){
   alert("please use a valid name")
   return false;
 }

 if(lastNameResult == false){
   alert("please use a valid last name")
   return false;
 }

 if(emailResult == false){
   alert("please use a valid email")
   return false;
 }

 if(phoneResult == false){
   alert("not a valid phone number")
   return false;
 }

/* La inn en alert her også, bare for å få en respons når alt fungerer som det skal */
else(
  alert("everything went fine")
)



}

// dette er en incursive function
var factoral = function fac(n){
  if (n<2){
    return 1;
  }

  else {
    return n * fac(n - 1)

}

}

console.log(factoral(2));





    myObj = { "name":"Lasse", "age":48, "car":null };
    for(x in myObj){
      console.log(x + " " + myObj[x]); 
    }

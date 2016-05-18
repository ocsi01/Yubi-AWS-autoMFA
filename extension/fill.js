$('document').ready(function() {


$('#input_signin_button') 
  .append('<a id="mfa_button" class="css3button" href="#" alt="Continue" value="Continue">Add MFA</a>') 
  .click(function(){
    
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://localhost:3000?name=" + $("#username").val() + "@" + $("#account").val(), true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if(this.response == "")
	       $("#mfacode").val("MFA server is unavailable!");
      else if(this.response.indexOf( $("#username").val() + "@" + $("#account").val()) >= 0)
      {
        var out = this.response.split(" ")
         $("#mfacode").val(out[6]);
      }
      else
	       $("#mfacode").val(this.response);
      
       
  }
}
xhr.send();
    
    }); 
});

function myFunc( data ){
	$("#mfacode").val(data);
}

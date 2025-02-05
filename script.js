function validateForm() 
{
    var hashedPassword = hashPassword(pass);
    alert("Login successful !");
}
  
  function hashPassword(pass) 
  {
    return btoa(pass); 
  }
  
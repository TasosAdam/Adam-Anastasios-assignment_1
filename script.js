function getFormsValues(e){
  e.preventDefault()
  var formInputs = document.querySelectorAll(".input");
  var values = {}
  

  for(var i = 0; i < formInputs.length; i++){
    values[formInputs[i].name] = formInputs[i].value
  }
  
  console.log(values);
}
document.getElementById("formValues").addEventListener("submit", getFormsValues)

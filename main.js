var saveButton = document.querySelector('.save-button');
var titleTextField = document.querySelector('#title-text-field');
var bodyTextField = document.querySelector('#body-text-field');
var ideas = [];

saveButton.addEventListener('click', myFunction);

function myFunction(e){
  e.preventDefault();
  if(titleTextField.value && bodyTextField.value) {
    ideas.push(new Idea(titleTextField.value, bodyTextField.value));
  }
}

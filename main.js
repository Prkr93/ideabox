var saveButton = document.querySelector('.save-button');
var titleTextField = document.querySelector('#title-text-field');
var bodyTextField = document.querySelector('#body-text-field');
var cardContainer = document.querySelector('.card-container');
var ideas = [];

saveButton.addEventListener('click', function(e) {
  e.preventDefault();
  saveIdea();
  displayIdeas();
});


function saveIdea() {
  if(titleTextField.value && bodyTextField.value) {
    ideas.push(new Idea(titleTextField.value, bodyTextField.value));
  }
}

function displayIdeas() {
  cardContainer.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
    cardContainer.innerHTML += `
    <article id='${ideas[i].id}'>
      <div class="toolbar">
        <img src="./assets/star.svg"/>
        <img src="./assets/delete.svg"/>
      </div>
      <h4>${ideas[i].title}</h4>
      <p>${ideas[i].body}</p>
      <div class="comment-bar">
        <img src="./assets/comment.svg"/>
        <span>Comment</span>
      </div>
    </article>`;

  }
}

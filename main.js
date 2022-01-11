var saveButton = document.querySelector(".save-button");
var titleTextField = document.querySelector("#titleTextField");
var bodyTextField = document.querySelector("#bodyTextField");
var searchTextField = document.querySelector("#searchTextField");
var showStarredButton = document.querySelector("#showStarredButton");
var showAllButton = document.querySelector("#showAllButton");
var cardContainer = document.querySelector(".card-container");
var form = document.querySelector("form");
var ideas = [];

saveButton.addEventListener("click", function(e) {
  e.preventDefault();
  saveIdea();
  displayIdeas();
  clearFields();
});

form.addEventListener("input", checkFields);
cardContainer.addEventListener("click", toggleFavorite);
cardContainer.addEventListener("click", deleteIdea);
searchTextField.addEventListener("input", filterIdeas);
showStarredButton.addEventListener("click", function() {
  displayIdeas();
  toggleStarredIdeasView();
  filterIdeas();
});

showAllButton.addEventListener("click", function() {
  displayIdeas();
  toggleStarredIdeasView();
  filterIdeas();
});

function saveIdea() {
  if (titleTextField.value && bodyTextField.value) {
    ideas.push(new Idea(titleTextField.value, bodyTextField.value));
  };
};

function displayIdeas() {
  cardContainer.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    cardContainer.innerHTML += `
    <article id="${ideas[i].id}" class="${ideas[i].star}">
      <div>
        <div class="toolbar">
          <img class="favorite-button" src=""/>
          <img class="delete-button" src="./assets/delete.svg"/>
        </div>
        <h4>${ideas[i].title}</h4>
        <p>${ideas[i].body}</p>
        <div class="comment-bar">
          <img src="./assets/comment.svg"/>
          <p>Comment</p>
        </div>
      </div>
    </article>`;
  };
};

function clearFields() {
  titleTextField.value = "";
  bodyTextField.value = "";
  saveButton.disabled = true;
};

function checkFields() {
  if (titleTextField.value && bodyTextField.value) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  };
};

function toggleFavorite(e) {
  if (e.target.classList.contains("favorite-button") ) {
    var uniqueId = parseInt(e.target.closest("article").id);
    var ideaCard;
    e.target.closest("article").classList.toggle("true");
    e.target.closest("article").classList.toggle("false");
    for (var i = 0; i < ideas.length; i++) {
      if (ideas[i].id === uniqueId) {
        ideaCard = ideas[i];
      };
    };
    ideaCard.updateIdea(uniqueId);
  };
};

function deleteIdea(e) {
  if (e.target.classList.contains("delete-button")) {
    var uniqueId = parseInt(e.target.closest("article").id);
    for (var i = 0; i < ideas.length; i++) {
      if (ideas[i].id === uniqueId) {
        ideas.splice(i, 1);
      };
    };
    displayIdeas();
  };
};

function toggleStarredIdeasView() {
  showStarredButton.classList.toggle("hidden");
  showAllButton.classList.toggle("hidden");
  cardContainer.classList.toggle("show-starred");
};

function filterIdeas() {
  displayIdeas();

  for (var i = 0; i < ideas.length; i++) {
    if (!ideas[i].title.includes(searchTextField.value) && !ideas[i].body.includes(searchTextField.value)) {
      var ideaToHide = document.getElementById(ideas[i].id);
      ideaToHide.classList.add("hidden");
    };
  };
};

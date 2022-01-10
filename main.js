var saveButton = document.querySelector(".save-button");
var searchTextField = document.querySelector(".search-bar input");
var showStarredButton = document.querySelector("#showStarredButton");
var showAllButton = document.querySelector("#showAllButton");
var titleTextField = document.querySelector("#title-text-field");
var bodyTextField = document.querySelector("#body-text-field");
var cardContainer = document.querySelector(".card-container");
var formField = document.querySelector("form");
var ideas = [];

saveButton.addEventListener("click", function(e) {
  e.preventDefault();
  saveIdea();
  displayIdeas();
  clearFields();
});

formField.addEventListener("input", checkFields);
cardContainer.addEventListener('click', toggleFavorite);
cardContainer.addEventListener('click', deleteIdea);
searchTextField.addEventListener('input', filterIdeas);
showStarredButton.addEventListener('click', function() {
  displayIdeas();
  toggle(showStarredButton, showAllButton);
  toggleStarredIdeas();
  filterIdeas();
});

showAllButton.addEventListener('click', function() {
  displayIdeas();
  toggle(showAllButton, showStarredButton);
  toggleStarredIdeas();
  filterIdeas();
});

function saveIdea() {
  if(titleTextField.value && bodyTextField.value) {
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
          <span>Comment</span>
        </div>
      </div>
    </article>`;
  };
};

function clearFields() {
  titleTextField.value = "";
  bodyTextField.value = "";
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
    e.target.closest("article").classList.toggle("true");
    e.target.closest("article").classList.toggle("false");
    var ideaCard;
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

function toggle(visibleElement, hiddenElement) {
  visibleElement.classList.toggle("hidden");
  hiddenElement.classList.toggle("hidden");
};

function toggleStarredIdeas() {
  cardContainer.classList.toggle("show-starred");
}

function filterIdeas() {
  var articles = document.querySelectorAll('article');
  for (var i = 0; i < ideas.length; i++) {
    articles[i].classList.remove("hidden");
  };
  var ideasToHide = ideas.filter(idea => !idea.title.includes(searchTextField.value) && !idea.body.includes(searchTextField.value));
  for (var i = 0; i < ideasToHide.length; i++) {
    var selector = document.getElementById(ideasToHide[i].id);
    selector.classList.add('hidden');
  };
};

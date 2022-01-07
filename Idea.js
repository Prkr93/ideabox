class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  updateIdea(id) {
    var article = document.getElementById(id);
    var favoriteButton = article.querySelector(".favorite-button");
    if (this.star) {
      favoriteButton.src = "assets/star.svg";
    } else {
      favoriteButton.src = "assets/star-active.svg";
    }
    this.star = !this.star;
  }
}

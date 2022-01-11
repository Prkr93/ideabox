# IdeaBox
A box for all of your ideas. This site allows you to record and archive your ideas, good and bad alike! When you save a new idea, it generates a new card on the page. From here you have the option to favorite individual ideas or delete them from the collection. Additionally, you can filter the card view based on favorites or search terms.

#### Tech

This site was built using JavaScript, HTML, and CSS. The main functionality of the site is created through DOM manipulation in the JavaScript file.

#### Contributors
This site was built by [Matt Meier](https://github.com/mmeier274), [Dillon Parker](https://github.com/Prkr93), and [Kim Ward](https://github.com/kmewrd) as a group project for Turing School of Software & Design.

#### Future Additions

  - Create a page layout that is responsive across screen sizes, from desktop to mobile
  - Allow you to add comments to your saved ideas
  - Add client-side storage that allows ideas to persist on the page after page reload

## Step-by-Step Guide
#### Part 1: Adding Ideas
The site can be opened at [this link](https://prkr93.github.io/ideabox/). On load, you will see the main page that contains a form to add new ideas and a section that displays these ideas as "cards."

<img width="1440" alt="ideabox-main" src="https://user-images.githubusercontent.com/79027364/148860183-57c3b619-abc9-4fa8-8183-d89fa6faa3a2.png">

To add an idea, type your text into the Title and Body form fields then click Save. The Save button is disabled until you add text to both fields.

#### Part 2: Favoriting Ideas
In the top left corner of each idea card there is a star icon. Click on the star icon to save this idea to your favorites. Click on it again to remove the idea from your favorites.

![favoriting-ideas](https://user-images.githubusercontent.com/79027364/148862429-53271708-4b08-452c-a7d0-cf6360cc1058.gif)

#### Part 3: Deleting Ideas

Click the X icon in the top right corner of an idea card to delete the idea.

![deleting-ideas](https://user-images.githubusercontent.com/79027364/148863264-ab5cffb5-8e71-4dcb-b14c-758c9d959121.gif)

#### Part 4: Filtering

In the left sidebar there is a Show Starred Ideas button. If you have ideas that are favorited, clicking this button will display only your favorite ideas and remove the rest of the cards from view. If no ideas are favorited, this button will remove all cards from view.

After switching to the favorites view, the button text changes to Show All Ideas. This allows you to toggle between the two views.

![starred-view](https://user-images.githubusercontent.com/79027364/148862667-37054fd9-f8b5-4711-9e69-b1775c0b289e.gif)

Besides switching views, you can also use the search field to filter your ideas. Typing in search terms will automatically hide the cards that do not match the criteria.

![search-ideas](https://user-images.githubusercontent.com/79027364/148862743-954db008-7695-46b1-b5b3-209bc2cdbc07.gif)

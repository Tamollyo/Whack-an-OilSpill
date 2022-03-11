# Whack-an-OilSpill: Project 1

_Whack-a-Mole with a twist_

[Link to Whack An Oil Spill](https://cleantheocean.surge.sh/)

##### _By Molly Obermeier_ | [LinkedIn](https://www.linkedin.com/in/marie-obermeier-6b6b03158/)

## Description

#### Let's clean up! A player must whack (or clean up) trash or oil as it randomly appears in their ocean. Everytime they successfully clean up the trash it gets added to their overall score.

## Technologies Used

- Planning: [Trello](https://trello.com/b/Vtjx2dJ9/project-1-whack-a-mole)
- HTML
- CSS
- JavaScript

## Precendents

#### A take on a traditional game with a sentiment toward the environment.

![Whack-a-Mole](https://www.railwayage.com/wp-content/uploads/2019/11/whackamole.jpg)

#### Typically played in an arcade, Whack-a-Mole was a fun way to test your speed.

![Whack-a-Mole in person](https://blog.youmail.com/wp-content/uploads/sites/3/2020/02/Whack-a-Mole-2.jpg)

#### My inspiration for the theme of this project was, "If You Give a Beach a Bottle" by Max Romey

![Beach a Bottle](https://wsffimages.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/11/24121716/if-you-give-a-beach-a-bottle-website.jpg)

##### _You can watch the trailer here https://www.youtube.com/watch?v=9DqC-lAK5vY_

## Instructions

- Welcome!
- Did you know about 8 million pounds of trash get put into the ocean each day?

  - ###### Reference: https://www.condorferries.co.uk/plastic-in-the-ocean-statistics#:~:text=Every%20day%20around%208%20million,square%20kilometers%20%E2%80%93%20bigger%20than%20Texas.

- This game is a take on the classic game Whack-A-Mole. You must WHACK the trash out of our oceans, this is as simple as find and click. Once you've sucessfully cleaned up the trash your score will increase!
- OK! Let's practice cleaning up, click start to begin:

## Psuedo Code

###### GIT COMMIT

    - Have psuedo code and readme.md ready
    - Create a start page (HTML)
      - Create js at css pages
       - Link all the pages
      - Include instructions on how to play and the goal

###### GIT COMMIT

    - Include a button to start
      - Include on click event

###### GIT COMMIT

    - Once start has been clicked:
      - Create a new HTML Page to host the game
    - Begin game

###### GIT COMMIT

    - Create object to represent oil/trash
      - Object to have it's own style and class

###### GIT COMMIT

    - Trash/Oil randomly appears on a grid
        - Use a css grid style (flex/grid)
      - Test grid sizes is too easy (or Hard!)
        - Have objects appear randomly no matter the page size

###### GIT COMMIT

      - Must reappear and disappear in a matter of seconds
        - Include a timer: test at different intervals to see what is reasonable
        - If then statement to see if a trash object is there and has been clicked
          - If true a 'new' object must appear
      - Once one trash disapears a new one must appear again
        - Use math.random?

###### GIT COMMIT

    - User clicks on oil spill
      - Increase their score by 1

###### GIT COMMIT

      - This will be an on click event
      - Oil spill will disappear once clicked
        - Ensure timer does not interfear with click event

###### GIT COMMIT

    - Trash will continue to appear until the user is finished.
      - Score will continue to increase until user is done

###### GIT COMMIT FINAL

## Style

- 10 x 10 grid
- Color Palette Reference: https://color.adobe.com/search?q=ocean

* Bonus option: Use imagery or icons to represent different items
  - Icons: https://thenounproject.com/search/icons/?iconspage=1&q=oil
  - Bonus option: create object to follow the mouse

## Bonus

- As the player's score increases, increase the speed.
- Objects are randomized as they appear
- Different levels with different amount of grid spaces
  - Different levels will increase how many objects appear at the same time
- Include facts page
  - Create a button which goes to a seperate HTML page with information about the ocean
- Record high score?
- Include objects with different worth

## Credits

#### Ocean Facts

https://oceanservice.noaa.gov/ocean/help-our-ocean.html

#### Color Palette

https://color.adobe.com/search?q=ocean

#### Duck Content

https://media.istockphoto.com/photos/rubber-duck-covered-in-oil-picture-id134546936?k=6&m=134546936&s=612x612&w=0&h=4N9DcNeleYOmYgnw6sEPM1XGjmrX4osQuTiQeSLqClA=

https://media.istockphoto.com/photos/oil-slick-on-animal-picture-id182868583?k=6&m=182868583&s=612x612&w=0&h=M0P-xdgRXDwX4-P0DXr4s1mSOSyWpxv4moGwos0nlpQ=

https://i0.wp.com/dynaimage.cdn.cnn.com/cnn/w_1200/http:%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F130515103957-hong-kong-duck-deflate-story-top.jpg?ssl=1

https://www.yourlocalpaper.co.uk/wp-content/uploads/2017/07/Oily-duck.jpg

https://seaduckjv.org/wp-content/wow-aqua-3/data1/images/kingeideronwater.jpg

https://seaduckjv.org/wp-content/wow-aqua-3/data1/images/hoodedmerganser.jpg

https://wallpapercave.com/wp/vUZUBRZ.jpg

https://www.animalspot.net/wp-content/uploads/2019/10/Baby-Duck.jpg

https://quicksounds.com/library/sounds/duck

#### Background Image

https://unsplash.com/

#### Education

https://javascript.info/settimeout-setinterval

https://www.w3schools.com/js/js_operators.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

https://www.geeksforgeeks.org/how-to-make-a-beep-sound-in-javascript/

https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

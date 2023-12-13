# Memory Game

## Game developed alongside DIO's challenge "Potência Tech iFood - Game Development"

<br>
The initial part of the project was developed with the teacher, where he teaches how to make animations via CSS and how to create divs, add classes to them and other things through scripting.
<br>

## Additions made to the project

### Victory message when finishing the game

<br>
A simple subtitle was developed with the word victory at the end of the game, appearing only when all sets are complete
<br>

### Verification for loose elements

<br>
After developing the project with the teacher, I realized that there were some bugs when doing certain things in the game. The first thing I identified was that all cards with a set could be clicked again, which shouldn't happen, so I decided to make it so that when cards found their sets, the click function was removed. 
<br>
After that, I saw that if we clicked too quickly the card would flip, but it would not be recognized in the script. To solve this, I created a constant that stored a check function that is called every short period of time so that if a card was flipped and was not added to the checklist, it would be added without any problems. 
<br>
And finally, after solving these problems, I discovered that there were already complete pairs that could be clicked again because there was no class, which did not allow removing the click function from them. I added another check on the same constant so that if there was a set without a certain class, I would add it to it so there would no longer be this problem.
<br>

## How to play

<br>
Go to the green button called “Code”, click on it and then on “Download ZIP”. After downloading the file, unzip it with WinRar, 7Zip or an unzipper of your choice, open the folder and double-click on index.html, after that, the game should start. Have a good game.

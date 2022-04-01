# Tweeter Project

Tweeter is a simple, single-page Twitter clone. This page was built by Julia Tran. HTML, CSS, JS, jQuery and AJAX were used for the front-end end while Node and Express was used for the back. Tweeter is dynamic webpage where users can compose tweets. The page contains a form with a textarea for new content and a left-aligned tweet button for submitting . A character count has been added meaning when users exceed the character count, the character count becomes red. If users try to submit a tweet the exceeds the maximum character, an error message appears. This was made using jQuery animations. Tweeter displays tweets in a reverse-chronological order. Each individual tweet contains the user's avatar on the left, name on the left and handle on the right. The footer of each tweet contains a time stamp showing when each tweet was created. This was done using the timeago.js library. The footer also displays icons on the right which change color when you hover over them. Using media queries, the layout of tweeter also changes when used  bigger screens. When a user clicks the Compose button in the navigation bar, the compose tweet box toggles transitioning between shown and hidden states! 

Would you like to try Tweeter! Follow this easy steps to get it running on your own computer!

## Getting Started


1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. Get Tweeting! 

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- timeago.js

## Screenshots 

!["Screen shot of main page"](https://github.com/Juliaxtran/Tweeter/blob/master/public/images/main.png)
!["Screen shot of tweet"](https://github.com/Juliaxtran/Tweeter/blob/master/public/images/tweet.png)
!["Screen shot of character count"](https://github.com/Juliaxtran/Tweeter/blob/master/public/images/error.png)
!["Screen shot of dynamic web page"](https://github.com/Juliaxtran/Tweeter/blob/master/public/images/dynamic.png)



/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const createTweetElement= (data) => {
  const item = `
  <article>

  <header class=tweet>
    <div class=profile>
      <img class=profile-pic src="${data.user.avatars}">
      <h3>${data.user.name}</h3>
    </div>
    <h3 class="profile-handle">${data.user.handle}</h3>
  </header>

  <p>${data.content.text}</p>


  <footer class=tweet-footer>
    <h5>${data["created_at"]}</h5>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>

  </footer>


</article>

  `
  return item;
}


const renderTweets = function(tweets) {
for (tweet of tweets) {
 let allTweets = createTweetElement(tweet);
 $('.container').append(allTweets);

}

}





$(document).ready(function () {

  renderTweets(data);

})



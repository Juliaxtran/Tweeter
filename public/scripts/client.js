/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const createTweetElement = (data) => {
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
     <h5>${timeago.format(data["created_at"])}</h5>
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


const renderTweets = function (tweets) {
  for (const tweet of tweets) {

    let allTweets = createTweetElement(tweet);
    $('.tweet-container').prepend(allTweets);

  }

}





$(document).ready(function () {

  $("form").on("submit", function (event) {
    event.preventDefault()

    const formData = $("#tweet-text");
// Form Validation
    if( formData === null) {
      alert("Error: input cannot be empty");
     }

    if( formData.val().length > 140 ) {
      alert("Error: input exceeds max character count");
      return  $('form').trigger("reset");
    }

    const form = $(this).serialize();
    $.post("/tweets", form);
    location.href = location.href;

  });





  const loadTweets = () => {
    $.ajax("/tweets", { method: 'GET' })
      .then((data) => {
        renderTweets(data);
      })
  }

  loadTweets();






})



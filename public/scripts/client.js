/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function () {

// helper functions
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };



  const createTweetElement = (data) => {
    const item = `
    <article>

    <header class=tweet>
      <div class=profile>
        <img class=profile-pic src="${escape(data.user.avatars)}">
        <h3>${escape(data.user.name)}</h3>
      </div>
      <h3 class="profile-handle">${data.user.handle}</h3>
    </header>

    <p>${escape(data.content.text)}</p>



    <footer class=tweet-footer>
       <h5>${escape(timeago.format(data["created_at"]))}</h5>
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

// Post Form

  $("form").on("submit", function (event) {
    event.preventDefault()

    const formData = $("#tweet-text");

    let error = setInterval(()=> {
      $(".error").slideUp("slow")
      } ,7000);


     

    // Form Validation
    if(formData.val().length === 0) {
      $(".error-msg").text("Error: Field cannot be empty");
      $(".error").css("visibility", "visible").hide().slideDown("slow");
      error();
      return
     }



    if( formData.val().length > 140 ) {

      $(".error").css("visibility", "visible").hide().slideDown("slow");
      $('form').trigger("reset");
      error();

    }



    const form = $(this).serialize();

    $.post("/tweets", form);
    location.href = location.href;

  });



//Get Form

  const loadTweets = () => {
    $.ajax("/tweets", { method: 'GET' })
      .then((data) => {
        renderTweets(data);
      })
  }

  loadTweets();


})



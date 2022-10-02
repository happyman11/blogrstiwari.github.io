

function copy_link() {
  link = document.getElementById("share_link");
  navigator.clipboard.writeText(link.value);
  button = document.getElementById("copybutton");
  button.innerHTML = "Copied";
}


function set_linkshare(data) {
  link = document.getElementById("share_link");
  link.value = data;


}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined') return false;
  return (value.length > 0);
}

function feedback() {

  var email = document.getElementById("email");
  var message = document.getElementById("message");

  var button = document.getElementById("submitButton_feedback");
  var message_update_error = document.getElementById("submitErrorMessage");
  var message_update_sucess = document.getElementById("submitSucessMessage");

  message_update_error.innerHTML = " ";
  message_update_sucess.innerHTML = " ";



  check_email = isEmail(email.value);
  check_message = isNotEmpty(message.value);



  if (check_email & check_message) {

    button.innerHTML = "Submitting";
    button.style.background = '#000000';

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
    }
    let bodyContent = JSON.stringify({
      "user_feedback": message.value,
      "email": email.value

    }
    );

    let reqOptions = {
      url: "https://testingblogapi.herokuapp.com/article_data/feedback/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }


    axios.request(reqOptions)
      .then(response => {

        console.log(response)
        if (response.status == 200) {
          console.log(response)
          button.disabled = true;
          button.innerHTML = "Submitted";
          button.style.background = '#000000'

          message_update_sucess.innerHTML = response.data.response;

          email.value = " ";
          message.value = " ";

        }

        else {
          console.log(response)
          button.disabled = false;
          button.innerHTML = "Try Again";

          message_update_error.innerHTML = response.data.response;
        }

      }
      )


  }

  else {

    message_update_error.innerHTML = "Please check Entered Details";
    button.disabled = false;
    button.style.background = '#000000';
    button.innerHTML = "Try Again";

  }






}

function inlinesubscribepoem() {
  var update_div = document.getElementById("inlinesubscribepoem");
  var heading_update = document.getElementById("exampleModalLongTitlesubscribe");
  var email = document.getElementById("subscribe_email");
  var name = document.getElementById("name_subscribe");
  var phone = document.getElementById("phone_subscribe");

  var button_subscribe = document.getElementById("subscribe-button");
  var button_cancel = document.getElementById("subscribecancel-button");

  check_email = isEmail(email.value);
  check_name = isNotEmpty(name.value);
  check_phone = isNotEmpty(phone.value);
  if (check_email & check_name & check_phone) {
    console.log("call api");
    button_subscribe.innerHTML = "Submitting";
    button_cancel.style.display = "none";

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
    }
    let bodyContent = JSON.stringify({
      "name": name.value,
      "phone_number": phone.value,
      "email": email.value
    }
    );


    let reqOptions = {
      url: "https://testingblogapi.herokuapp.com/article_data/post_subscribe_user",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    axios.request(reqOptions)
      .then(response => {


        if (response.data.status == 200) {

          button_subscribe.style.display = "none";
          button_cancel.style.display = "none";
          heading_update.innerHTML = response.data.response;

          name.value = " ";
          email.value = " ";
          phone.value = " ";


        }

        else {
          button_subscribe.style.display = "block";
          button_cancel.style.display = "block";
          heading_update.innerHTML = response.data.response;
        }

      }
      )

  }
  else {
    heading_update.innerHTML = "Incorrect Details?? Please check";
    button_subscribe.style.display = "block";
    button_cancel.style.display = "block";
    button_subscribe.innerHTML = "Try Again";

  }
}

function subscribe() {

  var email = document.getElementById("email");
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");

  var button = document.getElementById("submitButton");
  var message_update_error = document.getElementById("submitErrorMessage");
  var message_update_sucess = document.getElementById("submitSucessMessage");
  message_update_error.innerHTML = "";
  message_update_sucess.innerHTML = "";


  check_email = isEmail(email.value);
  check_name = isNotEmpty(name.value);
  check_phone = isNotEmpty(phone.value);

  if (check_email & check_name & check_phone) {

    button.innerHTML = "Submitting";
    button.style.background = '#000000';

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
    }
    let bodyContent = JSON.stringify({
      "name": name.value,
      "phone_number": phone.value,
      "email": email.value
    }
    );


    let reqOptions = {
      url: "https://testingblogapi.herokuapp.com/article_data/post_subscribe_user",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }


    axios.request(reqOptions)
      .then(response => {


        if (response.data.status == 200) {

          button.disabled = true;
          button.innerHTML = "Submitted";
          button.style.background = '#000000'

          message_update_sucess.innerHTML = response.data.response;


          email.value = " ";
          name.value = " ";
          phone.value = " ";



        }

        else {
          button.disabled = false;
          button.innerHTML = "Try Again";

          message_update_error.innerHTML = response.data.response;
        }

      }
      )


  }

  else {
    message_update_error.innerHTML = "Incorrect Details?? Please check";
    button.disabled = false;
    button.style.background = '#000000';
    button.innerHTML = "Try Again";

  }


}
function myFunction() {

  $(".message").text("link copied");

}
function views_poems(id, update) {
  console.log(id, update)
  var update_div = document.getElementById(update);

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
  }
  let bodyContent = JSON.stringify({
    "id": id
  }
  );


  let reqOptions = {
    url: "https://testingblogapi.herokuapp.com/article_data/view_poems/",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }

  axios.request(reqOptions)
    .then(response => {

      if (response.status == 200) {

        update_div.innerHTML = response.data.data[2]
        // console.log("yess",response)
      }




    }
    )

}
function likes_poems(id, update) {
  // console.log(id,update)
  var update_div = document.getElementById(update);

  var deactivate_buttons_like = document.getElementById(`but-likes-${id}`);
  deactivate_buttons_like.disabled = true;

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
  }
  let bodyContent = JSON.stringify({
    "id": id
  }
  );


  let reqOptions = {
    url: "https://testingblogapi.herokuapp.com/article_data/likes_poems/",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }

  axios.request(reqOptions)
    .then(response => {

      if (response.status == 200) {

        update_div.innerHTML = response.data.data[1]

        var update_div_disable = document.getElementById('likes-${id}');
        update_div_disable.style.disabled = true;

      }




    }
    )

}



function call_poems() {
  var article_div = document.getElementById("poem_display");

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
  }

  let reqOptions = {
    url: "https://testingblogapi.herokuapp.com/article_data/show_blog_poems",
    method: "GET",
    headers: headersList,
  }




  axios.request(reqOptions)
    .then(response => {

      if (response.data.status == 200) {
        var loader = document.getElementById("loader_div");
        loader.style.display = 'none';
        var data_poems = response.data.data;
        // console.log(data_poems)
        for (let i = data_poems.length - 1; i >= 0; i--) {
          var id = data_poems[i][0];
          // console.log(data_poems[i][0])
          var name = data_poems[i][1];
          var published_url = data_poems[i][2];
          var image_url = data_poems[i][3];
          var timestamp = data_poems[i][4].slice(0, 10);
          var text = data_poems[i][8];
          var likes = data_poems[i][6];
          var dis = data_poems[i][7];
          var category = data_poems[i][5];

          //<button type="button" class="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-comments" aria-hidden="true"></i><sup>2</sup></button>
          //<button type="button" class="btn btn-outline-dark btn-sm"  id="share-${id}" onclick="copy_link(${published_url})"> <i class="fa fa-share-alt" aria-hidden="true"></i></button>
          article_div.innerHTML += `<div class="post-preview">
                                                   
                                                     <a href="${published_url}" target="_blank">
                                                        <h2 onclick="views_poems(${id},'dislike-${id}')" class="post-title" style="text-align: justify;">${name}</h2>
                                                        
                                                        
                                                        <img onclick="views_poems(${id},'dislike-${id}')" src="${image_url}" alt="${name}" style="z-index: 4;width:100%;height:250px!important;border-radius:15px; height:40;"class="img-fluid  border border-dark shadow-lg p-3 mb-5 bg-black rounded width-60px">
                                                    <h3 onclick="views_poems(${id},'dislike-${id}')" class="post-subtitle" style="text-align: justify;">${text}</h3>
                                                    </a>

                                                    <p class="font-italic"><span class="font-weight-bold">Categories:</span> ${category}</p>
                                                <p class="post-meta font-italic">
                                               
                                                 Posted by
                                                <a href="https://portfolio.rstiwari.com"><b>Ravi Shekhar Tiwari<b></a>
                                                on ${timestamp}
                                                
                                                <blockquote>
                                               <button type="button" id="but-likes-${id}" class="btn btn-outline-dark btn-sm" onclick="likes_poems(${id},'like-${id}')"> <i class="fa fa-thumbs-up" aria-hidden="true"></i><sup id="like-${id}">${likes}</sup></button>
    
                                                <button type="button" class="btn btn-outline-dark btn-sm" id="bell-${id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-bell" aria-hidden="true"></i></button>
                                                
                                               
                                                <button type="button" class="btn btn-outline-dark btn-sm"  id="share-${id}" onclick="set_linkshare('${published_url}')"  data-bs-target="#myModel"  data-bs-toggle="modal"> <i class="fa fa-share-alt" aria-hidden="true"></i></button>
                                                
                                                <i class="fa fa-eye" aria-hidden="true"  style="color:black;font-size:15px;"></i><sup ><span id="dislike-${id}"" style="font-size:x-small;">${dis}</span></sup>
                                               </blockquote>
                                                 </p>
                        
                                                 </div>`




          if (i != 0) {
            article_div.innerHTML += `<hr class="my-4" />`;
          }


        }

      }




    }
    )

}

function Unsubscribe() {

  var email = document.getElementById("email");
  var name = document.getElementById("name");


  var button = document.getElementById("submitButton");
  var message_update_error = document.getElementById("submitErrorMessage");
  var message_update_sucess = document.getElementById("submitSucessMessage");
  message_update_error.innerHTML = "";
  message_update_sucess.innerHTML = "";


  check_email = isEmail(email.value);
  check_name = isNotEmpty(name.value);
  if (check_email & check_name) {
    button.innerHTML = "Submitting";
    button.style.background = '#000000';

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
    }
    let bodyContent = JSON.stringify({
      "name": name.value,
      "email": email.value
    }
    );


    let reqOptions = {
      url: "https://testingblogapi.herokuapp.com/article_data/unsubscribe/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    axios.request(reqOptions)
      .then(response => {


        if (response.data.status == 200) {

          button.disabled = true;
          button.innerHTML = "Unsubscribed";
          button.style.background = '#000000'

          message_update_sucess.innerHTML = response.data.response;


          name.value = " ";
          email.value = " ";


        }

        else {
          button.disabled = false;
          button.innerHTML = "Try Again";

          message_update_error.innerHTML = response.data.response;
        }

      }
      )


  }
  else {
    message_update_error.innerHTML = "Incorrect Details?? Please check";
    button.disabled = false;
    button.style.background = '#000000';
    button.innerHTML = "Try Again";

  }


}

function likes_article(id, update) {
  // console.log(id,update)
  var update_div = document.getElementById(update);
  var deactivate_buttons_like = document.getElementById(`but-likes-${id}`);

  deactivate_buttons_like.disabled = true;

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
  }
  let bodyContent = JSON.stringify({
    "id": id
  }
  );


  let reqOptions = {
    url: "https://testingblogapi.herokuapp.com/article_data/likes_article/",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }

  axios.request(reqOptions)
    .then(response => {

      if (response.status == 200) {

        update_div.innerHTML = response.data.data[1];




      }




    }
    )

}


function views_article(id, update) {
  console.log(id, update)
  var update_div = document.getElementById(update);

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
  }
  let bodyContent = JSON.stringify({
    "id": id
  }
  );


  let reqOptions = {
    url: "https://testingblogapi.herokuapp.com/article_data/view_articles/",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }

  axios.request(reqOptions)
    .then(response => {

      if (response.status == 200) {

        update_div.innerHTML = response.data.data[2]
        // console.log("yess",response)
      }



    }
    )

}

function call_articles() {
  var article_div = document.getElementById("poem_display");

  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
  }

  let reqOptions = {
    url: "https://testingblogapi.herokuapp.com/article_data/show_articles/",
    method: "GET",
    headers: headersList,
  }




  axios.request(reqOptions)
    .then(response => {

      if (response.data.status == 200) {
        var loader = document.getElementById("loader_div");
        loader.style.display = 'none';
        var data_poems = response.data.data;
        console.log(data_poems)
        for (let i = data_poems.length - 1; i >= 0; i--) {
          var id = data_poems[i][0];
          // console.log(data_poems[i][0])
          var name = data_poems[i][1];
          var published_url = data_poems[i][2];
          var image_url = data_poems[i][3];
          var timestamp = data_poems[i][4].slice(0, 10);
          var text = data_poems[i][8];
          var likes = data_poems[i][6];
          var dis = data_poems[i][7];
          var category = data_poems[i][5];

          //<button type="button" class="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-comments" aria-hidden="true"></i><sup>2</sup></button>
          //<button type="button" class="btn btn-outline-dark btn-sm"  id="share-${id}" onclick="copy_link(${published_url})"> <i class="fa fa-share-alt" aria-hidden="true"></i></button>
          article_div.innerHTML += `<div  class="post-preview">
                                                 
                                                   <a  href="${published_url}" target="_blank" >
                                                      <h2 onclick="views_article(${id},'dislike-${id}')" class="post-title" style="text-align: justify;">${name}</h2>
                                                      
                                                      
                                                      <img onclick="views_article(${id},'dislike-${id}')" src="${image_url}" alt="${name}" style="z-index: 4;width:100%;height:250px!important;border-radius:15px; height:40;"class="img-fluid  border border-dark shadow-lg p-3 mb-5 bg-black rounded width-60px">
                                                     
                                                      <h3 onclick="views_article(${id},'dislike-${id}')" class="post-subtitle" style="text-align: justify;">${text}</h3>
                                                  </a>
                                                  <p class="font-italic"><span class="font-weight-bold">Categories:</span> ${category}</p>
                                              <p class="post-meta font-italic">
                                             
                                               Posted by
                                              <a href="https://portfolio.rstiwari.com"><b>Ravi Shekhar Tiwari<b></a>
                                              on ${timestamp}
                                              
                                              <blockquote>
                                             
                                             <button type="button" class="btn btn-outline-dark btn-sm" id="but-likes-${id}" onclick="likes_article(${id},'like-${id}')"> <i class="fa fa-thumbs-up" aria-hidden="true"></i><sup id="like-${id}">${likes}</sup></button>
  
                                              <button type="button" class="btn btn-outline-dark btn-sm" id="bell-${id}" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-bell" aria-hidden="true"></i></button>
                                              
                                             
                                              <button type="button" class="btn btn-outline-dark btn-sm"  id="share-${id}" onclick="set_linkshare('${published_url}')"  data-bs-target="#myModel"  data-bs-toggle="modal"> <i class="fa fa-share-alt" aria-hidden="true"></i></button>
                                              
                                              <i class="fa fa-eye" aria-hidden="true"  style="color:black;font-size:15px;"></i><sup ><span id="dislike-${id}" style="font-size:x-small;">${dis}</span></sup>
                                             </blockquote>
                                               </p>
                      
                                               </div>`




          if (i != 0) {
            article_div.innerHTML += `<hr class="my-4" />`;
          }


        }

      }




    }
    )

}


//Contact api
function contact_form() {
  var button = document.getElementById("submitButton");

  button.style.background = '#000000';
  button.innerHTML = "Submitting";
  button.disabled = true;

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");

  var sucess = document.getElementById("submitSuccessMessage");

  var fail = document.getElementById("submitErrorMessage");


  sucess.innerHTML = "";
  fail.innerHTML = "";


  check_email = isEmail(email.value);
  check_name = isNotEmpty(name.value);
  check_subject = isNotEmpty(subject.value);
  check_message = isNotEmpty(message.value);


  if (check_email & check_name & check_subject & check_message) {


    let bodyContent = JSON.stringify({
      "user_name": name.value,
      "user_email": email.value,
      "user_subject": subject.value,
      "user_message": message.value
    }
    );

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Token 4c1b3f8edb1034b25ba3b0455097d27437058ec0"
    }

    let reqOptions = {
      url: "https://testingblogapi.herokuapp.com/article_data/contact_user/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }


    axios.request(reqOptions)
      .then(response => {

        if (response.data.status == 200) {

          button.disabled = true;
          button.innerHTML = "Submitted";
          button.style.background = '#000000'
          sucess.innerHTML = response.data.response;

          name.value = " ";
          email.value = " ";
          subject.value = " ";
          message.value = " ";

        }
        else {
          button.disabled = false;
          button.innerHTML = "Failed";
          button.style.background = '#000000'

          fail.innerHTML = response.data.response;
        }

      }
      )
  }
  else {
    fail.innerHTML = "Incorrect Details?? Please check";
    button.disabled = false;
    button.style.background = '#000000';
    button.innerHTML = "Try Again";

  }







}
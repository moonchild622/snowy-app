//views, comments,upvotes and follow topic
const upvotes = document.querySelector('#upvote').innerHTML;
const views = document.querySelector('.views');
const commentsArray = document.querySelector('.comments-section');
const commentLength = commentsArray.querySelectorAll('.comments').length;
const commentCounter = document.querySelector('.commnt');
const upvotesCountHolder =document.querySelector('.upvotes');
const follow = document.querySelector('.follow-topic');

views.addEventListener("DOMContentLoad", ()=>{
   //to be implemented with backend
})

//setting up follow
let isFollwing = false;
follow.addEventListener('click', ()=>{
   if(!isFollwing){
       follow.innerHTML = 'Following';
       isFollwing = true;
    const card = document.querySelector('.card').innerHTML;
    localStorage.setItem("card", JSON.stringify(card))
   } else if(isFollwing){
    follow.innerHTML = 'Follow';
    isFollwing = false;
    localStorage.removeItem('card')
   }
})

//setting up upvote button
const upvoteButton = document.querySelector('#upvote');
 let isclicked = false;
 let upvoteCounter = 0;
upvoteButton.addEventListener('click', ()=>{
  let upvotesCounter = document.querySelector('.like-counter');
  if(!isclicked){
      upvoteCounter++;
      upvotesCounter.innerHTML = upvoteCounter;
      isclicked = true;
  } else if(isclicked){
      upvoteCounter--;
      upvotesCounter.innerHTML = upvoteCounter;
      isclicked = false;
  }
   
  //appending upvotes to upvote holder
  upvotesCountHolder.innerHTML = `${upvoteCounter} Upvotes`;

})

//setting up downvote holder
const downvoteButton = document.querySelector('.dislike');
 let isdownVoteClicked = false;
 let downvoteCounter = 0;
downvoteButton.addEventListener('click', ()=>{
  let downvotesCounter = document.querySelector('.main-dislike');
  if(!isdownVoteClicked){
      downvoteCounter++;
      downvotesCounter.innerHTML = downvoteCounter;
     isdownVoteClicked = true;
  } else if(isdownVoteClicked){
      downvoteCounter--;
      downvotesCounter.innerHTML = downvoteCounter;
      isdownVoteClicked = false;
  }

})

//setting up comment box
const post = document.querySelector('.post');
 post.addEventListener('keyup', ()=>{
     if(post.value.length > 112){
       post.rows = '5';
     } else if(post.value.length > 34){
         post.rows = '3';
     }
     else if(post.value.length < 34){
         post.rows = '1';
     }
     //console.log(post.value.length);
 });

 let commentList = document.querySelector('.comments-section');

 //setting up commenting functionality
 const doComment = document.querySelector('.send');
 doComment.addEventListener('click',()=>{ 
     //removing no-comment message
     let noCommentMessage = document.querySelector('.no-comment-message');
     noCommentMessage.style.display = 'none'
     //getting comment content
     let commentContent = document.querySelector('.post').value;
     //check if comment value is empty
     if(commentContent === ''){
       let postBox = document.querySelector('.post');
       postBox.style.border = '2px solid red';
       postBox.placeholder = 'please input comment';
       //postBox.style.color = 'rgb(114, 114, 110)'
     } else {
      let postBox = document.querySelector('.post');
      postBox.style.border = '1px solid  rgba(96, 92, 99, 0.705)';
     //getting comment array
     let commentList = document.querySelector('.comments-section');
     //getting the user id
     let usernameID = document.querySelector('#id').innerHTML;
     //setting up the date
     let dateObject = new Date();
     let dateDay = dateObject.getDate();
     let dateMonth = dateObject.getMonth() + 1;
     let dateYear = dateObject.getFullYear();
     let dateHour = dateObject.getHours();
     let dateMinutes = dateObject.getMinutes();
     let checkAMPM = dateHour >= 12 ? 'pm' : 'am';
     let completeDate = document.createElement('div');
     completeDate.innerHTML = `${dateDay}/${dateMonth}/${dateYear}, ${dateHour}:${dateMinutes}${checkAMPM}`;
     //setting up the whole comment
    //setting up a new element
     let newDiv = document.createElement('div')
     newDiv.setAttribute('class', 'comments')
    //setting up avatar
    let avatar = document.querySelector('.user-avatar').src;
    //setting up array
    let newNode = document.querySelectorAll('.comments');
    //appending comment to a new element
     newDiv.innerHTML = `
     <div class='flex-comment'>
     <img src="${avatar}" alt="commenter">
     <div class="commenters-name">${usernameID}<p             
     class="date">${completeDate.innerHTML}</p></div>
     </div>
     <p class="comment-content">${commentContent}</p>
     <div class="post-tools" id="comments-icons">
     <p class="like"><div class="fa fa-arrow-circle-up"id="upvote"></div> <span class="like-counter">0</span></p>
     <p class="dislike"><div class="fa fa-arrow-circle-down"id="downvote"></div> <span class="dislike-counter">0</span></p> 
     <p class="share"><div class="fa fa-share-alt" id="share"></div></p>
     </div>
     `
      //<div class="commenters-name">${usernameID}</div> <br>
      //<p class="date">${completeDate.innerHTML}</p>
     commentList.appendChild(newDiv);
     //upvote comment
     let upvoteElement =  commentList.querySelectorAll('.upvote-comment');
     upvoteElement.forEach((upvote)=>{
      let isclicked = false;
      let upvoteCounter = 0;
       upvote.addEventListener('click', (e)=>{
         let thisVote = e.target
        if(!isclicked){
          upvoteCounter++;
          isclicked = true;
          let voteCounter = thisVote.querySelector('.comment-like');
          voteCounter.innerHTML = upvoteCounter;
        } else if(isclicked){
          upvoteCounter = 0;
          isclicked = false;
          let voteCounter = thisVote.querySelector('.comment-like');
          voteCounter.innerHTML = upvoteCounter;
        }
       })
     })
     //downvote comment
     let downvoteElement =  commentList.querySelectorAll('.downvote-comment');
     downvoteElement.forEach((downvote)=>{
      let isclicked = false;
      let downvoteCounter = 0;
      downvote.addEventListener('click', (e)=>{
         let thisdownVote = e.target
        if(!isclicked){
          downvoteCounter++;
          isclicked = true;
          let voteCounter = thisdownVote.querySelector('.comment-dislike');
          voteCounter.innerHTML = downvoteCounter;
      } else if(isclicked){
          downvoteCounter = 0;
          isclicked = false;
          let voteCounter = thisdownVote.querySelector('.comment-dislike');
          voteCounter.innerHTML = downvoteCounter;
      }
       })
     })
     //delete comment
     let deleteElement = commentList.querySelectorAll('.delete-comment');
     commentCounter.innerHTML = `${deleteElement.length}  <span class="fa fa-comment"></span>`
     deleteElement.forEach((del)=>{
          del.addEventListener('click', (e)=>{
             let buttonTarget = e.target.parentElement.parentElement.remove();
             const commentLength = commentsArray.querySelectorAll('.comments').length;
             const commentLengthy = commentsArray.querySelectorAll('.comments')
             if(commentLength <= 0){
             commentCounter.innerHTML = `0 <span class="fa fa-comment"></span>`;
             noCommentMessage.style.display = 'block';
             noCommentMessage.style.textAlign = 'center';
             } else{
              commentCounter.innerHTML = `${commentLength} <span class="fa fa-comment"></span>`;
             }
          })
      });
    } 
    let rr = document.querySelector('.post');
    rr.value = '';
    rr.rows = '1';     
})
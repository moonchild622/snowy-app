//declaring variable
const makePost = document.querySelector('.post-icon');
const mostViewed = document.querySelector('.most-viewed');
let postMain = document.querySelector('.post-main')
const mostViewedCards = postMain.querySelectorAll('.card');
const  updateTopic = document.querySelector('.update-topic');
let updateTopicSection = document.querySelector('.updated-topics');
const updateTopicCards = updateTopicSection.querySelectorAll('.card');
const  newTopicContent =document.querySelector('.new-topics-content');
const  newTopic =document.querySelector('.new-topic');
const newTopicCards = newTopicContent.querySelectorAll('.card')
console.log(newTopic.innerHTML);

updateTopicSection.style.display = 'none';
newTopicContent.style.display = 'none';

//add event listener for local storage 
 //document.addEventListener("DOMContentLoaded", showContent);

 const upVote = document.querySelectorAll('.like');
upVote.forEach((upvotes)=>{
   let counter = 0;
   let hasClicked = false;
  upvotes.addEventListener('click', (e)=>{
      let upvote = e.target;
      if(!hasClicked){
       counter++
       hasClicked = true;
       let voteCounter = upvote.querySelector('.like-counter');
       voteCounter.innerHTML = counter;
      } else if(hasClicked){
          counter = 0;
           hasClicked = false;
           let voteCounter = upvote.querySelector('.like-counter');
           voteCounter.innerHTML = counter;
       }
      let add = document.querySelector('.add')
      upvotes.classList.toggle('add')
  }) 
})

//Downvote
const downVote = document.querySelectorAll('.dislike');
downVote.forEach((downvotes)=>{
    let p = document.querySelector('.dislike-counter');
   let counter = 0;
   let hasClicked = false;
  downvotes.addEventListener('click', (e)=>{
      let downvote = e.target;
      if(!hasClicked){
       counter++
       hasClicked = true;
       let voteCounter = downvote.querySelector('.dislike-counter');
       voteCounter.innerHTML = counter;
      } else if(hasClicked){
          counter = 0;
           hasClicked = false;
           let voteCounter = downvote.querySelector('.dislike-counter');
           voteCounter.innerHTML = counter;
       }
      let add = document.querySelector('.add')
      downvotes.classList.toggle('add')
  }) 
})

//check most view is empty
//most viewed options
mostViewed.addEventListener('click', ()=>{
    //get current class
    let current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    
    if(mostViewed.classList.contains('current')){
        mostViewed = mostViewed;
    } else{
        mostViewed.classList.add('current')
    }
    //hide other subs on click
    let mainPost = document.querySelector('.post-main').style.display = 'block';
    let updateTopicSection = document.querySelector('.updated-topics').style.display = 'none';
    newTopicContent.style.display = 'none';

    //adjust the height of make post;
    let makePostContainer = document.querySelector('.make-post')
    makePostContainer.style.top = '50%'
})

//updated topics
updateTopic.addEventListener('click', ()=>{
//get current class
  let current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  
  if(updateTopic.classList.contains('current')){
      updateTopic = updateTopic;
  } else{
      updateTopic.classList.add('current');
  }
  //hide other subs 
  newTopicContent.style.display = 'none'
  let mainPost = document.querySelector('.post-main').style.display = 'none';  
  // check if updated topics is empty
  if(updateTopicCards.length <= 0){
      let updateTopicNoContent =  document.querySelector('.update-no-content');
      updateTopicSection.style.display = 'block';
      updateTopicNoContent.innerHTML = 'no topics at the moment';
    } else{
      let updateTopicNoContent =  document.querySelector('.update-no-content');
     // updateTopicNoContent.innerHTML = '';
     updateTopicSection.style.display = 'block';
      updateTopicNoContent.style.display = 'none'
    } 
    
  //adjust the height of make post;
    let makePostContainer = document.querySelector('.make-post')
    makePostContainer.style.top = '50%'
})

//newTopic
newTopic.addEventListener('click', ()=>{
    //get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    
    if(newTopic.classList.contains('current')){
        newTopic = newTopic;
    } else{
        newTopic.classList.add('current');
    }
    //hide other section
    let mainPost = document.querySelector('.post-main').style.display = 'none';
    let updateTopicSection = document.querySelector('.updated-topics').style.display = 'none';
    // check if updated topics is empty
    if(newTopicCards.length <= 0){
     let newTopicNoContent =  document.querySelector('.new-topic-no-content');
     newTopicContent.style.display = 'block';
     newTopicNoContent.innerHTML = 'no topics at the moment';
    } else{
     let newTopicNoContent =  document.querySelector('.new-topic-no-content');
     newTopicContent.style.display = 'block';
     newTopicNoContent.style.display = 'none';
    }
    
  //adjust the height of make post;
    let makePostContainer = document.querySelector('.make-post');
     makePostContainer.style.top = '50%';
 })
//add event listener
makePost.addEventListener('click', ()=>{
   const getPost = document.querySelector('.make-post');
   const firstHeader = document.querySelector('.first-header');
   const section = document.querySelector('.section-button');
   const sectionContent = document.querySelector('.post-main');
   const updateTopicSection = document.querySelector('.updated-topics');
   const  newTopic = document.querySelector('.new-topic');
   const  newTopics = document.querySelector('.new-topics-content');
   sectionContent.style.filter = 'blur(1px)';
   firstHeader.style.filter = 'blur(1px)';
   section.style.filter = 'blur(1px)';
   updateTopicSection.style.filter = 'blur(1px)';
   newTopic.style.filter = 'blur(1px)';
   newTopics.style.filter = 'blur(1px)';
   getPost.style.display = 'block';
  })

   //close post
   const closePost = document.querySelector('.close-post');
    closePost.addEventListener('click', ()=>{
    const getPost = document.querySelector('.make-post');
    const firstHeader = document.querySelector('.first-header');
    const updateTopicSection = document.querySelector('.updated-topics');
    const section = document.querySelector('.section-button');
    const sectionContent = document.querySelector('.post-main');
    const  newTopic = document.querySelector('.new-topic');
    const  newTopics = document.querySelector('.new-topics-content');
    sectionContent.style.filter = 'none';
    newTopics.style.filter = 'none';
    firstHeader.style.filter = 'none';
    section.style.filter = 'none';
    updateTopicSection.style.filter = 'none';
    newTopic.style.filter = 'none'
    getPost.style.display = 'none';
    })

    //checking for charcters count
    const contentCount = document.querySelector('#heading-content');
    contentCount.addEventListener('keydown', (e)=>{
    //console.log(contentCount);
      if(contentCount.value.length >= 245){
        contentCount.style.border = '5px solid red'
        alert('you have reached the max for now, press "post" to make a post');
      }
    })
 
    //creating the send functionality
  const send = document.querySelector('.new-post');
  send.addEventListener('click', ()=>{
     //getting inputed values;
     let headerInput = document.querySelector('#heading-header').value;
     let contentValue = document.querySelector('#heading-content').value;
       //check if input is empty
     if(contentValue.length === 0  || headerInput.length === 0){
      let headerInput = document.querySelector('#heading-header');
      headerInput.style.border = '2.5px solid red';
      headerInput.placeholder = 'please input header';

      let contentValue = document.querySelector('#heading-content');
      contentValue.style.border = '2.5px solid red'
      contentValue.placeholder = 'please input some contents'
     }else{
        let header = document.querySelector('#heading-header');
        header.style.border = 'none';
    
        let content = document.querySelector('#heading-content');
        content.style.border = 'none';
      //changing the current class to 'new topic' section
      const newTopicMenu = document.querySelector('.new-topic');
      const current = document.querySelector('.current');
      newTopicContent.style.display = 'block';
       //hide other section
     let mainPost = document.querySelector('.post-main').style.display = 'none';
     let updateTopicSection = document.querySelector('.updated-topics').style.display = 'none';
      current.classList.remove('current');
      if(newTopicMenu.classList.contains('current')){
          newTopicMenu= newTopicMenu;
      } else{
          newTopicMenu.classList.add('current')
      };
    //getting element to append   
      const newTopic = document.querySelector('.new-topics-content');
      let msg = document.querySelector('.new-topic-no-content');
      let username =  document.querySelector('.username').innerHTML;
      let avatar = document.querySelector('.avatar').src;
      let spaceName = document.querySelector('.section-name');
       //creating new element
      let newTopicAppend = document.createElement('div');
      newTopicAppend.setAttribute('class', 'card');
     // creating date object
     let dateObject = new Date();
     let dateDay = dateObject.getDate();
     let dateMonth = dateObject.getMonth() + 1;
     let dateYear = dateObject.getFullYear();
     let dateHour = dateObject.getHours();
     let dateMinutes = dateObject.getMinutes();
     let checkAMPM = dateHour >= 12 ? 'pm' : 'am';
     let  completeDate = document.createElement('div');
     completeDate.innerHTML = `${dateDay}/${dateMonth}/${dateYear}, ${dateHour}:${dateMinutes}${checkAMPM}`;
     //append 
     let newArray = [];
     newTopicAppend.innerHTML = `
     <div class="image-head">
     <img src="${avatar}"thumbnail">
     <div class="username"><a href="profile.html" class="this">${username}</a></div>
    </div>
    <div class="content-box">
    <h1>${headerInput}</h1>
    <p class='content'>${contentValue}</p>
    <p class='date-post'>${completeDate.innerHTML}</p>
    <div class="post-tools">
    <p class="like"><div class="fa fa-arrow-circle-up"id="upvote"></div> <span class="like-counter">100</span></p>
    <p class="dislike"><div class="fa fa-arrow-circle-down"id="downvote"></div> <span class="dislike-counter">100</span></p> 
    <p class="dislike"><div class="fa fa-comment"id="comment"></div> <span class="comment-counter">89</span></p> 
    <button class="see-more"><a href=post.html>more...</a></button>
</div>
    </div>
     `;

     //setting up upvote functionality
     const upVote = newTopicAppend.querySelectorAll('.like');
     upVote.forEach((upvotes)=>{
     let counter = 0;
     let hasClicked = false;
     upvotes.addEventListener('click', (e)=>{
      let upvote = e.target;
      if(!hasClicked){
       counter++
       hasClicked = true;
       let voteCounter = upvote.querySelector('.like-counter');
       voteCounter.innerHTML = counter;
      } else if(hasClicked){
          counter = 0;
           hasClicked = false;
           let voteCounter = upvote.querySelector('.like-counter');
           voteCounter.innerHTML = counter;
       }
    }) 
    })
 
     //downvote functionality
     const downVote = newTopicAppend.querySelectorAll('.dislike');
     downVote.forEach((downvotes)=>{
         let p = document.querySelector('.dislike-counter');
        let counter = 0;
        let hasClicked = false;
       downvotes.addEventListener('click', (e)=>{
           let downvote = e.target;
           if(!hasClicked){
            counter++
            hasClicked = true;
            let voteCounter = downvote.querySelector('.dislike-counter');
            voteCounter.innerHTML = counter;
           } else if(hasClicked){
               counter = 0;
                hasClicked = false;
                let voteCounter = downvote.querySelector('.dislike-counter');
                voteCounter.innerHTML = counter;
            }
           let add = document.querySelector('.add')
           downvotes.classList.toggle('add')
       }) 
     })   

     //changing opacity
    let seeMore = newTopicAppend.querySelector('.see-more');
    seeMore.style.backgroundColor = 'rgba(140, 0, 255, 0.438)';
    //notification for 'see more'
    seeMore.addEventListener('click', ()=>{
        alert("this feature will be available shortly")
    })
    //appending topics
    // newTopic.append(newTopicAppend);
     let noTopicMessage = document.querySelector('.new-topic-no-content').style.display = 'none';
     //noTopicMessage.innerHTML = '';
    
     //stacking of posts
    newArray.push(newTopicAppend);
    newArray.forEach((element)=>{
        let firstChild = newTopic.firstElementChild;
        newTopic.insertBefore(element, firstChild);
    })
    //clearing input field
    headerInput = '';
    contentValue = '';
    //closing up of post modal
    const getPost = document.querySelector('.make-post');
    const firstHeader = document.querySelector('.first-header');
    const updateTopicfilter = document.querySelector('.updated-topics');
    const section = document.querySelector('.section-button');
    const sectionContent = document.querySelector('.post-main');
    const  newTopicfilter = document.querySelector('.new-topic');
    const  newTopics = document.querySelector('.new-topics-content');
    sectionContent.style.filter = 'none';
    newTopics.style.filter = 'none';
    firstHeader.style.filter = 'none';
    section.style.filter = 'none';
    updateTopicfilter.style.filter = 'none';
    newTopicfilter.style.filter = 'none'
    getPost.style.display = 'none';
    }
 })
 
//check is mostviewed section is empty
if(mostViewedCards.length <= 0){
    let messageDisplay = document.querySelector('.no-content-display');
    messageDisplay.innerHTML = 'no topics at the moment'
    //let updateTopicNoContent =  document.querySelector('.update-no-content').style.display = 'none';
} else {
    let messageDisplay = document.querySelector('.no-content-display');
    messageDisplay.innerHTML = '';
    //let updateTopicNoContent =  document.querySelector('.update-no-content').style.display = 'none';
}















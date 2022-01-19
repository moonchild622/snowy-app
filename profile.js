//declaring variables for profile
const editProfile = document.querySelector('.edit-profile');
const closeMenu = document.querySelector('.close-menu');
const submit = document.querySelector('.submit-changes');
const topics = document.querySelector('.topics');
const posts = document.querySelector('.posts');
const upvotes = document.querySelector('.upvotes');

//add event listeners
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
//show menu
editProfile.addEventListener('click',()=>{
        let editProfileMenu = document.querySelector('.edit-profile-element');
      let body = document.querySelector('.profile-container');
      let body2 = document.querySelector('.profile-grid');
      body2.style.filter = 'blur(1px)';
      body.style.filter = 'blur(1px)';
      editProfileMenu.style.display = 'block';
      editProfileMenu.style.zIndex = '';
})

//hide menu
closeMenu.addEventListener('click', ()=>{
    let editProfileMenu = document.querySelector('.edit-profile-element');
    let body = document.querySelector('.profile-container');
    let body2 = document.querySelector('.profile-grid');
    body2.style.filter = 'blur(0px)';
    body.style.filter = 'blur(0px)';
    editProfileMenu.style.display = 'none';
    editProfileMenu.style.zIndex = '1'
});

//update bio
submit.addEventListener('click', ()=>{
  let newbiodata = document.querySelector('.new-bio-data').value;
  let biodata = document.querySelector('.profile-bio');
  if(newbiodata === ''){
      let newBioDataStyle = document.querySelector('.new-bio-data')
      newBioDataStyle.style.border = '2px solid red';
      newBioDataStyle.placeholder = 'please input a valid bio';
  } else{
    let editProfileMenu = document.querySelector('.edit-profile-element');
    editProfileMenu.style.display = 'none';
    biodata.innerHTML = newbiodata;
    let body = document.querySelector('.profile-container');
    let body2 = document.querySelector('.profile-grid');
    body2.style.filter = 'blur(0px)'; 
    body.style.filter = 'blur(0px)';
  }
 
})

// Topics, posts, upvote 
topics.addEventListener('click', ()=>{
  let current = document.querySelector('.current');
  current.classList.remove('current')
  if(topics.classList.contains('current')){
    topics = topics;
  } else{
    topics.classList.add('current')
  }
  let upvote = document.querySelector('.upvote').style.display = 
'none';
let post = document.querySelector('.postf').style.display = 'none';
let topic = document.querySelector('.topic');
   topic.style.visibility = 'visible';  
   topic.style.display = 'block'
})

posts.addEventListener('click', ()=>{
  let current = document.querySelector('.current');
  current.classList.remove('current')
  if(posts.classList.contains('current')){
    posts = posts;
  } else{
    posts.classList.add('current')
  }
  let upvote = document.querySelector('.upvote').style.display = 
   'none';
 let post = document.querySelector('.postf').style.display =  'block';
 let topic = document.querySelector('.topic').style.visibility =  'hidden';
})

upvotes.addEventListener('click', ()=>{
  let current = document.querySelector('.current');
  current.classList.remove('current')
  if(upvotes.classList.contains('current')){
    upvotes = upvotes;
  } else{
    upvotes.classList.add('current')
  }
  let upvote = document.querySelector('.upvote');
  upvote.style.display = 'block';
  let post = document.querySelector('.postf').style.display =  
'none';
  let topic = document.querySelector('.topic').style.display =  
'none';
})
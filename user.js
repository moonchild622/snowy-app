//declaring variables
const followBack = document.querySelector('.add');
const block = document.querySelector('.block');
const topics = document.querySelector('.topics');
const posts = document.querySelector('.posts');
const upvotes = document.querySelector('.upvotes');

//Upvote
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

//adding event listeners
    let followBackClicked =  true;
  followBack.addEventListener('click', (e)=>{
     let currentButton = e.target;
     if(followBackClicked){
         currentButton.style.backgroundColor = 'yellow';
         currentButton.style.color = 'black';
         currentButton.textContent = 'following';
         followBackClicked = false;
     } else if(!followBackClicked){
         currentButton.style.backgroundColor = '#0000FF';
         currentButton.style.color = 'white';
         currentButton.textContent = 'follow';
         followBackClicked = true;
     }
  })

  let blockClicked =  true;
  block.addEventListener('click', (e)=>{
     let currentButton = e.target;
     if(blockClicked){
         currentButton.innerHTML = 'blocked';
         blockClicked = false;
     } else if(!blockClicked){
         currentButton.innerHTML = 'block';
         blockClicked = true;
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



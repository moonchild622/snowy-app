//setting up variables
const followersCount = document.querySelector('.followers-count');
const allFollowers = document.querySelectorAll('.grid-follower');
const followBackButton = document.querySelectorAll('.follow-back');

//adding event listeners
followBackButton.forEach((followBack)=>{
    let followBackClicked =  true;
  followBack.addEventListener('click', (e)=>{
     let currentButton = e.target;
     if(followBackClicked){
         currentButton.style.backgroundColor = 'blue';
         currentButton.style.color = 'white';
         currentButton.innerHTML = 'following';
         followBackClicked = false;
     } else if(!followBackClicked){
         currentButton.style.backgroundColor = 'yellow';
         currentButton.style.color = 'black';
         currentButton.innerHTML = 'follow back';
         followBackClicked = true;
     }
  })
});

//followers count
followersCount.textContent =  allFollowers.length;
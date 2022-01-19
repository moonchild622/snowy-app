//setting up variables
const followingCount = document.querySelector('.following-count');
const commentContainer = document.querySelector('.following-area')
const unfollowButton = document.querySelectorAll('.unfollow');
const allFollowing = commentContainer.querySelectorAll('.grid-following');
//adding event listeners
followingCount.textContent = allFollowing.length
unfollowButton.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const allFollowing = commentContainer.querySelectorAll('.grid-following');
       setTimeout(()=>{
        button.style.backgroundColor = 'red';
        button.style.color = 'white'
        button.textContent = 'unfollowed';
       },200)  
       setTimeout(()=>{
          button.parentElement.remove();
          followingCount.textContent = allFollowing.length - 1;
       }, 1500)
    })
})
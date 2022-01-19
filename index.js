//handling upvote, downvote, comment
//Upvote
 const upVote = document.querySelectorAll('#upvote');
 upVote.forEach((upvotes)=>{
    let counter = 0;
    let hasClicked = false;
   upvotes.addEventListener('click', (e)=>{
       let upvote = e.target.parentElement;
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

//popular page
const popular = document.querySelector('.popular');
const personalized = document.querySelector('.personalized');

popular.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const active = document.querySelector('.active');

    active.classList.remove('active');

    if(popular.classList.contains('active')){
        popular = popular;
    } else{
        popular.classList.add('active')
    }
    const cardArray = document.querySelector('.container-home').style.display = 'block';
    const personalizedContainer = document.querySelector('.personalized-container').style.display = 'none'
})

//personalized page
personalized.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const active = document.querySelector('.active')

    active.classList.remove('active');

    if(personalized.classList.contains('active')){
        personalized = personalized;
    } else{
        personalized.classList.add('active')
    }

    const card = document.querySelector('.container-home').style.display = 'none';
    const personalizedContainer = document.querySelector('.personalized-container').style.display = 'block'

})

//Creating the personalized contents

const personalizedContainer = document.querySelector('.personalized-container');
const card = document.querySelector('.card');
const cardClone = card.cloneNode(true);
const card2 = document.querySelector('#card');
const card2clone = card2.cloneNode(true)

    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const paragraphContainer = document.createElement('p');
    const li2 = document.createElement('li');
    const paragraphContainer1 = document.createElement('p');

    ul.setAttribute('class','personalized-content')
    li.setAttribute('class','followed-topics');
    li2.setAttribute('class','following-posts');
    paragraphContainer.setAttribute('class', 'paragraph1-style');
    paragraphContainer1.setAttribute('class', 'paragraph2-style');

    li.innerHTML = `<h4>Followed Topics</h4> <p>1</p>`;
    li2.innerHTML =`<h4>Following</h4> 
    <p>1</p>`;

   //appending to various elements
   paragraphContainer.appendChild(cardClone)
   paragraphContainer1.appendChild(card2clone)
   li.appendChild(paragraphContainer)
   ul.appendChild(li);
   ul.appendChild(paragraphContainer);
   ul.appendChild(li2);
   ul.appendChild(paragraphContainer1);

   //adding an event listeners to the subs.
   li.addEventListener('click', (e)=>{
       e.preventDefault();
       let toggleItem = document.querySelector('.paragraph1-style');

       toggleItem.classList.toggle('toggle-this')
   })

   li2.addEventListener('click', (e)=>{
       e.preventDefault();
       
       let toggleItem = document.querySelector('.paragraph2-style');
        toggleItem.classList.toggle('toggle-this')
   })
   personalizedContainer.appendChild(ul)






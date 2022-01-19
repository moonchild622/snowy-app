//menu toggler function
const toggleMenu = document.querySelector('.container-div');

/* toggling functionality */
toggleMenu.addEventListener('click', ()=>{
    var toggleItem = document.querySelector('.collapsible-menu')
    toggleItem.classList.toggle('show')
  }) 
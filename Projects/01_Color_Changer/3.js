const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
   

    if(e.target.id === 'red'){
      body.style.backgroundColor = 'red'
      // if original color can be directly written
    }
    if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id
      // if original color can be directly written as this as well
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'green'){
    //  body.style.backgroundColor = e.target.id
     body.style.backgroundColor = 'rgb(39, 255, 1)';
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = 'rgb(236, 106, 128)'
    }
    if (e.target.id === 'brown') {
      body.style.backgroundColor = 'rgb(124, 28, 28)';
    }


  });
});

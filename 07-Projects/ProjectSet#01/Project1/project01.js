// Console pe "Aqdas" print karega
console.log("Aqdas");

// Sab buttons ko select karega jinka class "button" hai
const buttons = document.querySelectorAll('.button');

// Body element ko select karega
const body = document.querySelector('body');

// Har button pe event listener lagayega
buttons.forEach(function (button) {
  console.log(button); // Console pe har button ko print karega

  // Button click hone par function chalega
  button.addEventListener('click', function (e) {
    console.log(e); // Event object ko console pe print karega
    console.log(e.target); // Click kiya gaya element console pe print karega

    // Agar button ka id "grey" hai, to background grey ho jayega
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    // Agar button ka id "white" hai, to background white ho jayega
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    // Agar button ka id "blue" hai, to background blue ho jayega
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    // Agar button ka id "yellow" hai, to background yellow ho jayega
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

/*
// Switch case ka use kar ke background color change karna

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      default:
        console.log('Invalid');
    }
*/
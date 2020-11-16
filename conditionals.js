/**
 * Active learning: A simple calendar
In this example, you are going to help us finish a simple calendar application. 
In the code you've got:

1. A <select> element to allow the user to choose between different months. An 
    onchange event handler to detect when the value selected in the <select> 
    menu is changed.
2. A function called createCalendar() that draws the calendar and displays the 
    correct month in the <h1> element.

We need you to write a conditional statement inside the onchange handler 
function, just below the // ADD CONDITIONAL HERE comment. It should:

1. Look at the selected month (stored in the choice variable. This will be the 
    <select> element value after the value changes, so "January" for example.)
2. Set a variable called days to be equal to the number of days in the selected 
    month. To do this you'll have to look up the number of days in each month 
    of the year. You can ignore leap years for the purposes of this example.
 */

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;
  let days;
  // ADD CONDITIONAL HERE
  if (choice === 'January' || choice === 'March' || choice ==='May' || choice ==='July' || choice ==='August' || choice === 'October' || choice ==='December') {
    days = 31;
  }
  else if(choice === 'February') {
    days = 28;
  }
  else if(choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
    days = 30;
  }

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}


/**
 * Active learning: More color choices!
In this example, you are going to take the ternary operator example we saw 
earlier and convert the ternary operator into a switch statement to allow us to 
apply more choices to the simple website. Look at the <select> — this time 
you'll see that it has not two theme options, but five. You need to add a switch 
statement just underneath the // ADD SWITCH STATEMENT comment:

1. It should accept the choice variable as its input expression.
2. For each case, the choice should equal one of the possible values that can be 
   selected, that is, white, black, purple, yellow, or psychedelic. Note that 
   the values are case sensitive, and should equal the <option> element value 
   values rather than the visual labels.
3. For each case, the update() function should be run, and be passed two color 
   values, the first one for the background color, and the second one for the 
   text color. Remember that color values are strings, so need to be wrapped in 
   quotes. 
 */

createCalendar(31,'January');

const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

  // ADD SWITCH STATEMENT
  switch (choice) {
    case 'white':
      update('white', 'black');
      break;
    case 'black':
      update('black', 'white');
      break;
    case 'purple':
      update('purple', 'white');
      break;
    case 'yellow':
      update('yellow', 'darkgray');
      break;
    case 'psychedelic':
      update('lime', 'purple');
      break;
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
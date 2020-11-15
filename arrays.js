/*
1. Below the // number 1 comment are a number of strings, each one containing a 
product name and price separated by a colon. We'd like you to turn this into an
array and store it in an array called products.

2. On the same line as the // number 2 comment is the beginning of a for loop. 
In this line we currently have i <= 0, which is a conditional test that causes 
the for loop to only run once, because it is saying "stop when i is no longer 
less than or equal to 0", and i starts at 0. We'd like you to replace this with 
a conditional test that stops the loop when i is no longer less than the
products array's length.

3. Just below the // number 3 comment we want you to write a line of code that 
splits the current array item (name:price) into two separate items, one 
containing just the name and one containing just the price. If you are not sure
how to do this, consult the Useful string methods article for some help, 
or even better, look at the Converting between strings and arrays section
of this article.

4. As part of the above line of code, you'll also want to convert the price from 
a string to a number. If you can't remember how to do this, check out the first 
strings article.

5. There is a variable called total that is created and given a value of 0 at the
top of the code. Inside the loop (below // number 4) we want you to add a 
linethat adds the current item price to that total in each iteration of the loop, 
so that at the end of the code the correct total is printed onto the invoice. 
You might need an assignment operator to do this.

6. We want you to change the line just below // number 5 so that the itemText 
variable is made equal to "current item name — $current item price", for example
"Shoes — $23.99" in each case, so the correct information for each item is 
printed on the invoice. This is just simple string concatenation, which should 
be familiar to you.
*/
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
products = [  'Underpants:6.99',
               'Socks:5.99',
               'T-shirt:14.99',
               'Trousers:31.99',
               'Shoes:23.99'];

for (let i = 0; i < products.length; i++) { // number 2
  // number 3
  let name = products[i].slice(0, products[i].indexOf(':'));
  let price = products[i].slice(products[i].indexOf(':')+1);
  // number 4
  let num = Number(price);
  total += num;
  
  // number 5
  let itemText = `${name} -- $${price}`;
  
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

/*
Live output
Underpants -- $6.99
Socks -- $5.99
T-shirt -- $14.99
Trousers -- $31.99
Shoes -- $23.99
Total: $83.95
 */

/**
 * In this example we're going to show a much simpler use — here we're giving 
 * you a fake search site, with a search box. The idea is that when terms are 
 * entered in the search box, the top 5 previous search terms are displayed in 
 * the list. When the number of terms goes over 5, the last term starts being 
 * deleted each time a new term is added to the top, so the 5 previous terms 
 * are always displayed.
 * 
 * To complete the app, we need you to:

1. Add a line below the // number 1 comment that adds the current value entered 
into the search input to the start of the array. This can be retrieved using 
searchInput.value.
2. Add a line below the // number 2 comment that removes the value currently 
at the end of the array.
 */

const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
      myHistory.pop();

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}

/**
 * Arrays 2
Now let's move on to another task. Here you are provided with a string to work 
with. We'd like you to:

1. Convert the string into an array, removing the + characters in the process. 
Save the result in a variable called myArray.
2. Store the length of the array in a variable called arrayLength.
3. Store the last item in the array in a variable called lastItem.
 */


// Add your code here

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myArray = myString.split('+');
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${ arrayLength }.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${ lastItem }".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);

/**
 * Array: Ryu,Ken,Chun-Li,Cammy,Guile,Sakura,Sagat,Juri

The length of the array is 8.

The last item in the array is "Juri".
 */


/**
 * Arrays 3
For this final array task, we provide you with a starting array, and you will
work in somewhat the opposite direction. You need to:

1. Remove the last item in the array.
2. Add two new names to the end of the array.
Go over each item in the array and add its index number after the name inside 
parentheses, for example Ryu (0). Note that we don't teach how to do this in the 
Arrays article, so you'll have to do some research.
3. Finally, join the array items together in a single string called myString, 
with a separator of " - ".
 */

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop();

myArray.push('Sayaka', 'Kyoko');

for(let i = 0; i < myArray.length; i++) {
  myArray[i] = `${myArray[i]} (${i})`;
}

let myString = myArray.join(' - ');


// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);

/**
 * 
 * Ryu (0) - Ken (1) - Chun-Li (2) - Cammy (3) - Guile (4) - Sakura (5) - Sagat (6) - Sayaka (7) - Kyoko (8)
 */
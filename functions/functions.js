/**
 * Functions 1
For the first task, you have to create a simple function — chooseName() — 
that prints a random name from the provided array (names) to the provided 
paragraph (para), and then run it once.
 */

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function chooseName() {
    var item = names[Math.floor(Math.random() * names.length)];
    return item;
}

para.textContent = chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);

/**
 * Functions 3
In this task, you return to the problem posed in Task 1, with the aim of 
improving it. The three improvements we want you to make are:

Refactor the code that generates the random number into a separate function 
called random(), which takes as parameters two generic bounds that the random 
number should be between, and returns the result.
Update the chooseName() function so that it makes use of the random number 
function, takes the array to choose from as a parameter (making it more 
flexible), and returns the result.
Print the returned result into the paragraph (para)'s textContent. 
 */

let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function chooseName() {
  para.textContent = random(names);
}

function random(name) {
  var item = name[Math.floor(Math.random() * name.length)];
  return item;
}

chooseName();
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
     


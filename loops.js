/**
 * Active learning: Launch countdown!
In this exercise, we want you to print out a simple launch countdown to the 
output box, from 10 down to Blastoff. Specifically, we want you to:

1. Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
2. For each iteration, create a new paragraph and append it to the output <div>, 
   which we've selected using const output = document.querySelector('.output');. 
   In comments, we've provided you with three code lines that need to be used 
   somewhere inside the loop:
2A. const para = document.createElement('p'); — creates a new paragraph.
2B. output.appendChild(para); — appends the paragraph to the output <div>.
2C. para.textContent = — makes the text inside the paragraph equal to whatever 
    you put on the right-hand side, after the equals sign.
3. Different iteration numbers require different text to be put in the paragraph 
   for that iteration (you'll need a conditional statement and multiple 
   para.textContent = lines):
3A. If the number is 10, print "Countdown 10" to the paragraph.
3B. If the number is 0, print "Blast off!" to the paragraph.
3C. For any other number, print just the number to the paragraph.
4. Remember to include an iterator! However, in this example we are counting 
   down after each iteration, not up, so you don't want i++ — how do you iterate 
   downwards?
 */

let output = document.querySelector('.output');
output.innerHTML = '';

for(let i = 10; i >= 0; i--) {
const para = document.createElement('p');
if(i === 10) {
  para.textContent = 'Countdown ' + i;
  output.appendChild(para); 
}
else if (i === 0) {
  para.textContent = 'Blast off!';
  output.appendChild(para);
}
else{
  para.textContent = i;
  output.appendChild(para);
}

}

/**
 * Countdown 10

9

8

7

6

5

4

3

2

1

Blast off!
 */


/**
 * Active learning: Filling in a guest list
In this exercise, we want you to take a list of names stored in an array and 
put them into a guest list. But it's not quite that easy — we don't want to let 
Phil and Lola in because they are greedy and rude, and always eat all the food! 
We have two lists, one for guests to admit, and one for guests to refuse.

Specifically, we want you to:

1. Write a loop that will iterate from 0 to the length of the people array. 
   You'll need to start with an initializer of  let i = 0;, but what condition 
   do you need?
2. During each loop iteration, check if the current array item is equal to "Phil" 
  or "Lola" using a conditional statement:
2A. If it is, concatenate the array item to the end of the refused paragraph's 
    textContent, followed by a comma and a space.
2B. If it isn't, concatenate the array item to the end of the admitted 
    paragraph's textContent, followed by a comma and a space.

We've already provided you with:
1. let i = 0; — Your initializer.
2. refused.textContent += — the beginnings of a line that will concatenate 
   something on to the end of refused.textContent.
3. admitted.textContent += — the beginnings of a line that will concatenate 
   something on to the end of admitted.textContent.

Extra bonus question — after completing the above tasks successfully, 
you will be left with two lists of names, separated by commas, but they will be 
untidy — there will be a comma at the end of each one. Can you work out how to 
write lines that slice the last comma off in each case, and add a full stop to 
the end?
 */

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for(let i = 0; i < people.length; i++)
{
  if(people[i] === 'Phil' || people[i] === 'Lola'){
    refused.textContent += people[i] + ', ';
  }
  else
  {
    admitted.textContent += people[i] + ', ';
  }
}

refused.textContent = refused.textContent.slice(0, refused.textContent.length-2);
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2);

/**
 * Admit: Chris, Anne, Colin, Terri, Sam, Kay, Bruce

Refuse: Phil, Lola
 */
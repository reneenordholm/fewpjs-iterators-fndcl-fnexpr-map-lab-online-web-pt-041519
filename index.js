const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // grab each tutorial in tutorials array
  return tutorials.map(function(tutorial) {
    // create string of words within each tutorial array
    let words = tutorial.split(' ')
    // upcase the first letter of each word in array
    let titledWord = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    // join each tutorial array back together and return it
    return titledWord.join(' ')
  })
}

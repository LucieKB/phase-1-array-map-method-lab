const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const tutorialsString = tutorials.toString()

const words = tutorialsString.split(" ");  

// function capitalizeFirstLetter(words){
//   for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//     return words
//   }
  
//   console.log(capitalizeFirstLetter(words));

// function mapCapitalize(){
//   return tutorials.map((line)=>{
//     const splitLine = line.split(" ")
//     const mapLine = splitLine.map((word)=>{
//       return word[0].toUpperCase() + word.slice(1);
//    })
//    return mapLine
   
//   })

  
// }

function titleCased(){
  return tutorials.map((line)=>{
    const splitLine = line.split(" ")
    const mapLine = splitLine.map((word)=>{
      return word[0].toUpperCase() + word.slice(1);
   })
   const backIntoSentence = mapLine.join(" ")
   return backIntoSentence
   
  })

  
}
 
// console.log(mapCapitalize())

// function backIntoSentence(){
//   return mapCapitalize.map((singleWord)=>{
//     const lineArray = [singleWord]
//     const joinLine = lineArray.join(" ")
//    return joinLine
// })
// }
// console.log(backIntoSentence())

// function titleCased(){

//   return backIntoSentence
// }

// console.log(titleCased())
const { kStringMaxLength } = require('buffer');
const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question(`Welcome to the password validator.`, 
function(input){;
  tokens = input.split(` `)
  reader.question('Please enter password below.',
  function(input){
  tokens = input.split(` `)
  
  // let i = 'Transforms'
  //  console.log(i.length)
  
   password = tokens[0]
  
  
  if(password.length >= 10){
    console.log(`Success`)
  }else{
    console.log(`Incorrect, password must be 10 or more characters.`)
  }
  reader.close()

  })

  



})

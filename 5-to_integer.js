const args = process.argv.slice(2);

const value = args[0]



if(Number.isInteger(Number(value))  == true ){
  console.log(`My number: ${value}`)
}else{
  console.log(`Not a number`)
}




















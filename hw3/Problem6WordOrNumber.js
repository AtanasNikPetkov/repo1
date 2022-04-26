let input = [
    '35',     
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
let inputData = gets();

let i
let reversedString=''

if (isNaN(inputData)){

    for (i=inputData.length-1; i>=0; i--){
    reversedString +=inputData[i]
}
}else{
    reversedString=+inputData+1
}


print(`${reversedString}`)
let input = [
    '5',
    '1',
    '5',
    '-5',
    '7',
    '6'
    ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let countOfNumbers = +gets();
 
  let i
  let currentNumber
  let stringSignNums=""
  let prevNumber;
  
  for (i=0; i<countOfNumbers; i++) {

    currentNumber = +gets();

    if(i === 0) {
        stringSignNums = currentNumber;
    } else if(prevNumber === currentNumber) {
        stringSignNums+= '=' + currentNumber;
    } else if(prevNumber < currentNumber) {
        stringSignNums+= '<' + currentNumber;
    } else {
        stringSignNums+= '>' + currentNumber;
    }
    prevNumber = currentNumber;
  } 
   
  print(`${stringSignNums}`)
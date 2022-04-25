let input = [
    '5',
    
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let number = +gets();
  let s= ""
  let i = 1;
  
  for ( i=1; i<=number; i++){
        s += i + " ";
  }
  print(`${s}`);
  
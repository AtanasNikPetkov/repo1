let input = [
    '15',
    
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let number = +gets();
  
  let i = 1;
  let k=number
  let s = "";

  for (i; i<=number; i++){
       
    
        s = s + i + " ";
  }
  for (k-1; k>=2; k--){
        s = s + (k-1) + " ";
  }

print(`${s}`)
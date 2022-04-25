let input = [
    '10',
    
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let number = +gets();
  
  let i = 1;
  let s = "";

  for (i; i<=number; i++){
        if (i ===3 || i===7)
        continue; 
        s = s + i + " ";
}
print(`${s}`)
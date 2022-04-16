let input=[
    '-5',
    '-2',
    ]; 


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)



let num1=gets();
let num2=gets();

print(Math.max(num1,num2));


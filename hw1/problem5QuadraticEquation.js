let input=[
    '1',
    '-1',
    '-2'
    ]; 


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a=Number(gets());
let b=Number(gets());
let c=Number(gets());

let x1=Number
let x2=Number

let D=(b*b-4*a*c);

x1=(-1*b-Math.sqrt(D))/(2*a);
x2=(-1*b+Math.sqrt(D))/(2*a);

print(`x1=${x1}; x2=${x2}`);


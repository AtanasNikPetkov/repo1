let input=[
    '5',
    '2',
    '2',
    '4',
    '1',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a=Number(gets());
let b=Number(gets());
let c=Number(gets());
let d=Number(gets());
let e=Number(gets());


print(Math.max(a,b,c,d,e));
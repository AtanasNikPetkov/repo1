let input=[
    '5.5',
    '4.5',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a=Number(gets());
let b=Number(gets());

if (a>b) {
    c=b
    d=a
    a=c
    b=d
    print(`${a}, ${b}`)
}else {
        print(`${a}, ${b}`)
    }

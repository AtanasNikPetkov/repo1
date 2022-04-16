let input=[
    '10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let a = Number(gets());

if (a>=1 && a<=3){
    b=a*10;
    print(`${b}`)
}    else if (a>=4 && a<=6){
    c=a*100;
    print(`${c}`)
}    else if ( a>=7 && a<=9){
    d=a*1000;
    print(`${d}`)
}   else if (a<=0 || a>0){
    print(`invalid score`)
}
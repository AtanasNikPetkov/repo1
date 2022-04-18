let input=[
    '0',
    '-2.5',
    '15',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)


let a=Number(gets());
let b=Number(gets());
let c=Number(gets());

if (a>=b && a>=c){
    if (b>=c){
        print(`${a},${b},${c}`);
    }else if (b<b){
        print(`${a},${c},${b}`);
    }
}else if (b>=a && b>=c){
    if (a>=c){
        print(`${b},${a},${c}`);
    }else if (c>a){
        print(`${b},${c},${a}`);
    }
}else if (c>=a && c>=b){
    if (a>=b){
        print(`${c},${a},${b}`);
    }else if (a<b){
        print(`${c},${b},${a}`);
}
}
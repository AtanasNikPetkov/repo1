let input=[
    '2',
    'false',
 ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

print(`Please choose a type:
1 --> number	
2 --> boolean	
3 --> string`)

let type=Number(gets());


print(`${type}`);


let variable=gets();




switch (type){
        case 1:
        print(`Please enter a number: ${variable} `);
                variable=Number(variable);
                variable++;
                print(`${variable}`);break;
    case 2:
        print(`Please enter a boolean: ${variable}`);
                if (variable==='true') {
                    variable=true;
                }else if ((variable==='false')){
                     variable=false;
                }
        print(`${!variable}`); break;
    case 3:
        print(`Please enter a string:${variable} `);
               print(`${variable}*`);break;
} 
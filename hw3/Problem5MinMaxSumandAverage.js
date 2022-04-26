let input = [
    '3',
    '2',
    '5',
    '1',
       
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
let number = +gets();

let i 
let currentNum=0 
let prevNum=0
let min=Number.MIN_SAFE_INTEGER 
let max=0
let sum=0
let avg=0


for (i=0; i<=3; i++){
    currentNum= +gets()
    sum+= currentNum
    if (i===0){
        prevNum= currentNum
        max=currentNum
        min=currentNum
    }else if (currentNum!==prevNum){
        
            if (currentNum>max){
                max=currentNum
            }
            if (currentNum<min){
                min=currentNum
            }
    }prevNum=currentNum
}
avg = (sum/number)

print(`${min}`)
print(`${max}`)
print(`${sum}`)
print(`${avg.toFixed(2)}`)


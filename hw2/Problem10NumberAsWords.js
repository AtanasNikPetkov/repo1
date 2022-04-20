let input=[
    '999',
 ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)





let n=Number(gets());
let zeroToNineteen = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(' ');
let wholeDecimals = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");


let remainder=0;
let remainderdecimals=0;
let wholeDiv=0;

let remainderHundreds=0;
let wholeDivHundreds=0;

    if (n < 20) {
        print(zeroToNineteen[n]);
    

    }if (n>=20 && n < 100){

            remainder = n%10;
            wholeDiv=parseInt(n/10);
            print(wholeDecimals[wholeDiv-2] + ' ' + zeroToNineteen[remainder]);

    }if ((n>100 && n < 200) || (n>200 && n<300) || (n>300 && n<400) || (n>400 && n<500) || (n>400 && n<600) || (n>600 && n<700) || (n>700 && n<800) || (n>800 && n<900) || (n>900 && n<1000) ){
            
            wholeDivHundreds=parseInt(n/100);

            remainderHundreds=n%100;
            remainderdecimals=parseInt(remainderHundreds/10);

            remainder = n%10;
            
        print(zeroToNineteen[wholeDivHundreds]+ ' '+'hundred'+ ' ' + wholeDecimals[remainderdecimals-2] + ' ' + zeroToNineteen[remainder]);
    }if (n==100 ||n==200 ||n==300 ||n==400 ||n==500 ||n==600 ||n==700 ||n==800 ||n==900){
      
              wholeDivHundreds=parseInt(n/100);
        print(zeroToNineteen[wholeDivHundreds]+ ' ' + 'hundred' )
    }

        
        

        
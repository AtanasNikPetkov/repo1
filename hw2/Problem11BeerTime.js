let input=[
    '02:47 AM',
 ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)


let time=gets();

    timeSplittedString=time.split(/[ \:(,\)]+/ );

let  hours=Number(timeSplittedString[0]);
let  minutes=Number(timeSplittedString[1]);
let  amPM=timeSplittedString[2];

if (hours<0 || hours>12 ||minutes<0 ||minutes>60){
    print('invalid time')}
    else if (amPM=='PM'){
            if (hours>=1 && hours <=11){
            print('	beer time')
            }else print ('non-beer time')
    }else if (amPM=='AM'){
            if (hours>=0 && hours <3)
            print('	beer time');
            else if (hours==3 && minutes>0){
            print('non-beer time');
            }else if (hours==3 && minutes==0){
            print('beer time');
            }else print('non-beer time');
}


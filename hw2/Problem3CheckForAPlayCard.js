let input=[
    '500',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

let cardFace=String(gets());


switch (cardFace){
    case '2':
    print('yes');break;
    case '3':
    print('yes');break;
    case '4':
    print('yes');break;
    case '5':
    print('yes');break;
    case '6':
    print('yes');break;
    case '7':
    print('yes');break;
    case '8':
    print('yes');break;
    case '9':
    print('yes');break;
    case '10':
    print('yes');break;
    case 'J':
    print('yes');break;
    case 'Q':
    print('yes');break;
    case 'K':
    print('yes');break;
    case 'A':
    print('yes');break;
    default:
        print('no')
}
const devs=[

    {


        roll    :   1,
        name    : 'Asraf ',
        age     :  23,
        skill   :'java',
        income  : 5000,
        location :  'Dhamrai',
        gender     : 'Male'
    },
{
    roll    :   2,
    name    : 'jillur ',
    age     :  20,
    skill   :'PHP',
    income  : 7000,
    location :  'savar',
    gender     : 'Male'

},
{
    roll    :   4,
    name    : 'Rahim ',
    age     :  23,
    skill   :'java',
    income  : 5000,
    location :  'Dhamrai',
    gender     : 'Male'

},
{
    roll    :   3,
    name    : 'liko islam ',
    age     :  23,
    skill   :'PHP',
    income  : 10000,
    location :  'Dhamrai',
    gender     : 'Female'

}
];


let total=0;
devs.map(data =>{

if(data.skill=='java'){

console.log(`
         Name :${data.name}- stack:${data.skill}-
         income :${data.income}
`);

total= total+data.income;

}


});

console.log(`Total income: ${total}`);











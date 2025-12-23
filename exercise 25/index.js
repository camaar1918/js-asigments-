let array1=[1,2,3];
let array2=[...array1,4,5,6];

console.log(array2);


function multiple (...numbers){
    return numbers.reduce ((total,num)=> total*num,1

    )
};

console.log(multiple(20,30));


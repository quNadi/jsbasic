const arr=new Array(2,3,4);
const arr1=['apple',1];
console.log(arr);
console.log(arr1);

a=arr.indexOf(3);
b=arr.slice(1,2);
c=arr.join('.');
console.log(c);

function multi3(liczba){
    return liczba*3;
}
var arr3=[2,4,5,6];
var arr4=arr3.map(multi3);

console.log(arr4);

for(var i=0;i<3;i++){
    arr3[i]=arr3[i]*2;
}
console.log(arr3);



function christmasTree(x) {
    if(x < 3) {
        return "";
    }
    let tree = "";
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <= x + x - 1; j++) {
            if(j <= x - i || j >= x + i) {
                tree += " ";
            } else {
                tree += "*";
            }
        }
        tree += "\n";
    }
    return tree;
}

console.log(christmasTree(3));
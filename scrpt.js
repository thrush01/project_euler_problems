let x=0;
let max=10;
let y=5;
let z=3;

for(let i=z;i<max;i+=3){
    x+=i;
    z=i;
}
for(let i=y;i<max;i+=5){
    x+=i;
    y=i;

}
console.log(z);
console.log(y);
console.log(x);
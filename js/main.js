
//-------avg and sum even----------------

let a = [1,4,34,5,46,7,90,21,43,67,3];
let b = 0;
let c = 0;
for(i=0;i<a.length;i++){
	if(a[i]%2==0){
		b+=a[i];
		c++;
	}
}
let avg = b/c;
document.write(`Sum of even number is ${a} is ${b}`,"<br>");
document.write(`Average of even number is ${a} is ${avg}`);
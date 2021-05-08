
function productDigits(n)
{
	let product = 1;
  
  if(n < -1 || n >= 32767){
    console.log('Invalid input')
  return -1;
  }
  else{
  	while (n != 0)
	{
		product =( product * (n % 10));
		n = Math.floor(n / 10);
	}
  
  }

	return product;
}

let n = parseInt(prompt('Enter the distance travelled in km'));

console.log(n);
const result = productDigits(n);
console.log('Amount you Won: ' +result);









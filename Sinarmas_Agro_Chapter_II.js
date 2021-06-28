input = '240920-789857';

let range = input.split('-').map(x => parseInt(x));
lowerrange = range[0];
upperrange = range[1];

let numPossible = 0;


function checkIncreasing(var1){
  let digits = var1.toString().split("");
  let passes = false;
  let highestNum = parseInt(digits[0]);
  
  for(let i = 0; i<= digits.length - 1; i++ ){
    let currentNum = parseInt(digits[i])
    if(currentNum >= highestNum){
       passes = true;
       highestNum = currentNum;
    }else{
       passes = false;
       break;
    }
  }
  return passes;
}


function checkDumbsOne(var2){
  let digits = var2.toString().split("");
  let digitCount = 1;
  let prevDigit = parseInt(digits[0]);

  for(let i = 0; i<= digits.length-1; i++ ){
    let currentNum = parseInt(digits[i])
    if(currentNum == prevDigit ){
      digitCount +=1;
    }else{
		if(digitCount == 2){
			return true
		}
		digitCount = 1
	}
    prevDigit = currentNum;
  }
  return digitCount == 2
}


for(let i = lowerrange; i <= upperrange; i++ ){
  let increasing = checkIncreasing(i); 
  let doubles = checkDumbsOne(i); 
  
  if(increasing && doubles ){
    numPossible +=1;
  }

}
console.log(numPossible)
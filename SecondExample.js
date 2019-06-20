function logItem(loopType) {
 
 if(typeof loopType === 'object'){
	for (let o of loopType) {
		if(o%2 != 0){
  			text += "The number is " + loopType[o];
  	}
  }
}
	for (o in loopType) {
	  if(o%2 != 0){
  			text += "The number is " + loopType[o];
  			}
		}

	for (o = 0; o < loopType.length-1; o++) {
	  	if(o%2 != 0){
  			text += "The number is " + loopType[o];
  		}
	}


	let i =0;
	while (i < 10) {
	   if(i%2 != 0){
  			text += "The number is " + loopType[i];
  		}
	}


	do {
	  if(o%2 != 0){
  			text += "The number is " + loopType[o];
  		}
	}
	while (o < 10);
}

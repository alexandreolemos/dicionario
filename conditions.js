const vowels = ['a','e','i','o','u'];
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','z'];
const consoantsLessH = ['b','c','d','f','g','j','k','l','m','n','p','q','r','s','t','v','x','y','z'];
const wordPrefix = ['aero','agro','alvi','ante','anti','arqui','auto','contra','des','eletro','entre','extra','foto','geo','hidro','in','infra','intra','macro','maxi','mega','micro','mini','moto','multi','nano','neo','pluri','poli','proto','pseudo','retro','semi','sobre','socio','supra','tele','tri','ultra','vaso', 'video']




function doCompilation(firstWord, secondWord, joinChar){
	return firstWord + (joinChar ? joinChar : '') + secondWord;
}


function dictionaryMatch(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var checkedWord = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "dictionaryMatch",
		"matched": false
	};

	console.log(doCompilation(firstWord,secondWord,'r'));

	if(dictionaryWords.indexOf(firstWord, secondWord) !== -1) {
		} else if (dictionaryWords.indexOf(doCompilation(firstWord, secondWord)) !== -1){
			checkedWord.compilation = doCompilation(firstWord, secondWord);
			checkedWord.matched = true;
			checkedWord.ruleApplied = 'Junta-se sem hífen';
		} else if (dictionaryWords.indexOf(doCompilation(firstWord, secondWord,'-')) !== -1){
			checkedWord.compilation = doCompilation(firstWord, secondWord, '-');
			checkedWord.matched = true;
			checkedWord.ruleApplied = 'Junta-se com hífen';
		} else if (dictionaryWords.indexOf(doCompilation(firstWord, secondWord,'r')) !== -1){
			checkedWord.compilation = doCompilation(firstWord, secondWord, 'r');
			checkedWord.matched = true;
			checkedWord.ruleApplied = 'junta-se sem hífen e dobra-se o r';		
		}else if (dictionaryWords.indexOf(doCompilation(firstWord, secondWord, 's')) !== -1){
			checkedWord.compilation = doCompilation(firstWord, secondWord, 's');
			checkedWord.matched = true;
			checkedWord.ruleApplied = 'junta-se sem hífen e dobra-se o r';				

		} else {

		checkedWord.ruleApplied = 'Outras regras podem ser aplicadas';
	}

	return checkedWord;	
}




function firstCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"ruleApplied": "",
		"condition": "firstCondition",
		"matched": false
	};

	
	if(wordPrefix.indexOf(firstWord) !== -1) {
		if(lastCharacterOfFirstWord === firstCharacterOfLastWord) {
			retorno.compilation = doCompilation(firstWord, secondWord, '-');
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen - vogal igual';
		} else if(lastCharacterOfFirstWord !== firstCharacterOfLastWord && vowels.indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.compilation = doCompilation(firstWord, secondWord);
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen - vogal diferente';
		} else if (firstCharacterOfLastWord === 'h') {
			retorno.compilation = doCompilation(firstWord, secondWord, '-');
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen - h';
		} else if (consoantsLessH.indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.compilation = doCompilation(firstWord, secondWord);
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen - consoantes';
		} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
		}
	}

		return retorno;
	}



function secondCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "secondCondition",
		"matched": false
	};


	if(['circum','pan'].indexOf(firstWord) !== -1) {
		if(['a','e','i','o','u','h','m','n'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen';
		} else if (['b','c','d','f','g','j','k','l','p','q','r','s','t','v','w','x','y','z'].indexOf(firstCharacterOfLastWord) !== -1){
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen';
		} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
		}
	}	
		return retorno;
	}



function thirdCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "thirdCondition",
		"matched": false
	};	


 	if (['ciber', 'hiper', 'inter', 'super'].indexOf(firstWord) !== -1) {
	 	if (['h','r'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen';
		} else if (['a','e','i','o','u','b','c','d','f','g','j','k','l','m','n','p','q','s','t','v','w','x','y','z'].indexOf(firstCharacterOfLastWord) != -1 ) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen';
	 	} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
		}
	}
		return	retorno;
	}	


function fourthCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "fourthCondition",
		"matched": false
	};	


 	if (['sob','sub'].indexOf(firstWord) !== -1) {
 		if (['h','r','b'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen';
 		} else if (['a','e','i','o','u','c','d','f','g','j','k','l','m','n','p','q','s','t','v','w','x','y','z'].indexOf(firstCharacterOfLastWord !== -1)) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen';
 		} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
		}
	}
		return retorno;
	}			
	
function fifthCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "fifthCondition",
		"matched": false
	};	


 	if (['mal'].indexOf(firstWord) !== -1) {
 		if (['a','e','i','o','u','h'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen';
 		} else if (['b','c','d','f','g','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen';
 		} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
		}
	}
		return	retorno;
	}		

function sixthCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "sixthCondition",
		"matched": false
	};	


 	if (['co','re'].indexOf(firstWord) !== -1) {
 		if (['h'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen';
 		} else if (['a','e','i','o','u','b','c','d','f','g','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se sem hífen';
 	} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
		}
	}
		return retorno;
	}	

function seventhCondition(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord){
	var retorno = {
		"compilation": "",
		"ruleApplied": "",
		"condition": "seventhCondition",
		"matched": false
	};	

 	if (['além','aquém','bem','ex','pós','pré','recém','sem','vice'].indexOf(firstWord) !== -1) {
 		if (['a','e','i','o','u','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'].indexOf(firstCharacterOfLastWord) !== -1) {
			retorno.matched = true;
			retorno.ruleApplied = 'Junta-se com hífen';
 		}	
 	} else {
			retorno.ruleApplied = 'Outras regras podem ser aplicadas';
 
 	}
 		return retorno;
 	}	






	
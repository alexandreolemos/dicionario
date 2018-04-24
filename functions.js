const rulesToApply = [firstCondition, secondCondition, thirdCondition, fourthCondition, fifthCondition, sixthCondition, seventhCondition];
const dictionaryRuleToApply = [dictionaryMatch];


$.ajax({
  url: "http://htmlpreview.github.io/?https://github.com/alexandreolemos/dicionario/blob/master/dictionary.json",
}).done(function(JsonToGet) {
  const dictionaryWords = JsonToGet;
  //Management of the JSON with 'data' variable. 
});




function checkCompoundWord() {

	let firstWord = document.getElementById("wordFirstPart").value.toLowerCase();
	let secondWord = document.getElementById("wordSecondPart").value.toLowerCase();

	let lastCharacterOfFirstWord = firstWord.slice(-1);
	let firstCharacterOfLastWord = secondWord.slice(0,1);



	for(const dictionaryRule of dictionaryRuleToApply) { 
		let dictionaryResult = dictionaryRule(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord);

		if(dictionaryResult.matched) {
			console.log(dictionaryResult);
			document.getElementById("correctForm").value = dictionaryResult.compilation;

			if(!dictionaryResult.compilation){
				document.getElementById("appliedRule").innerHTML = 'Palavra não encontrada';
				return;
			}

			for(const rule of rulesToApply){
				let result = rule(firstWord, secondWord, lastCharacterOfFirstWord, firstCharacterOfLastWord);
				
				if(result.matched){
					console.log(result);
					document.getElementById("appliedRule").innerHTML = result.ruleApplied;

					return;
				}
			}

			document.getElementById("appliedRule").innerHTML = 'Outras regras podem ser aplicadas';
			return;
		}	
	}



	document.getElementById("appliedRule").innerHTML = 'Nenhuma regra aplicada';
}


function getAverageOfOddItems(createArrayTemplate) {
	console.log(
  		createArrayTemplate.reduce((a, b) => a + b, 0)
	)
}

getAverageOfOddItems(createArrayTemplate(4));
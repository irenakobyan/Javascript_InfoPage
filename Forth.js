function createArrayTemplate(length) {
	return Array.from({length: length}, () => Math.floor(Math.random() * 20));
}
createArrayTemplate(4);
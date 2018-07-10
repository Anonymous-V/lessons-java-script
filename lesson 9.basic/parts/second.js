function myModule() {
	this.hello = function() {
		return "hello";
	}

	this.goodBye = function() {
		return "goodBye";
	}
}

module.exports = myModule;
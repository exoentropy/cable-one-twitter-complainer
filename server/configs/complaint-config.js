module.exports = {
	tweetBody: function(promisedSpeed, actualSpeed, ispHandle) {
		return ispHandle + ' I pay for ' + promisedSpeed + 'mbps down, but am getting ' + actualSpeed + 'mbps.';
	},
	ispHandle: function() {
		return '@exoentropy';
	},
	promisedSpeed: function() {
		return 1.0;
	}
}

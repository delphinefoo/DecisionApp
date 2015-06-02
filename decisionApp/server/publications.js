Meteor.publish('theFactors', function() {
	var currentUserId = this.userId;
	return DecidingFactorsList.find()
});
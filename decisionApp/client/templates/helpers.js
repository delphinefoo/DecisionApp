Template.decisionsList.helpers ({
    'decisions': function() {
    	var currentUserId = Meteor.userId();
      return DecidingFactorsList.find({createdBy: currentUserId},
      															  {sort: {rank: 1}})
    }
});

Template.addFactors.events({
	'submit form': function(event){
		event.preventDefault();
		var factorNameVar = event.target.factorName.value;
		var currentUserId = Meteor.userId();
		DecidingFactorsList.insert({
			name: factorNameVar,
			createdBy: currentUserId
		});
	}
});

Template.decisionItem.helpers({

});

/*Template.decisions.rendered = function() {
	this.$('#decisionsList').sortable({
		stop: function(e, ui) {
			el = ui.item.get(0)
			before = ui.item.prev().get(0)
			after = ui.item.next().get(0)
			if(!before) {
				newRank = Blaze.getData(after).rank-1
			}
			else if(!after) {
				newRank = Blaze.getData(before).rank+1
			}
			else {
				newRank = (Blaze.getData(after).rank + Blaze.getData(before).rank)/2
			}
			DecidingFactorsList.update({_id: Blaze.getData(el)._id}, {$set: {rank: newRank}})
		}
	})
}*/
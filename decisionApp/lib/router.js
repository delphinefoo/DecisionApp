Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('theFactors'); }
});

Router.route('/', {name: 'decisionsList'});
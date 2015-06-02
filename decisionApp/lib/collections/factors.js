DecidingFactorsList = new Mongo.Collection('factors');


/*Meteor.startup(function() {
  if(DecidingFactorsList.find({}).count() == 0) {
    for(var i = 1; i <= 10; i++) {
      DecidingFactorsList.insert({
          name: "Item " + i,
          rank: i
      })
    }
  }
})*/
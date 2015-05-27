DecidingFactorsList = new Mongo.Collection('factors');

Meteor.startup(function() {
  if(DecidingFactorsList.find({}).count() == 0) {
    for(var i = 1; i <= 10; i++) {
      DecidingFactorsList.insert({
          name: "Item " + i,
          rank: i
      })
    }
  }
})



  /*$('.qual_list').on('dragstart', 'qual_item', function(e) {
    e.stopPropagation();
    $(this).addClass('dragging');
    dragSrcEl = this;
    e.originalEvent.dataTransfer.effectAllowed = 'move';
    e.originalEvent.dataTransfer.setData('text/html', $(this).html());
  });

  $('.qual_list').on('dragenter', '.qual_item', function(e) {
    $('.qual_item').removeClass('over');
    $(this).addClass('over');
  });

  $('.qual_list').on('dragover', '.qual_item', function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.originalEvent.dataTransfer.dropEffect = 'move';
    return false;
  });

  $('.qual_list').on('dragend', '.qual_item', function(e) {
    $(this).removeClass('dragging');
    $('.qual_item').removeClass('over');
  });

  $('.qual_list').on('drop', '.qual_item', function(e) {
    $(this).removeClass('dragging');
    $('.qual_item').removeClass('over');
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl != this)  {
      $(dragSrcEl).html($(this).html());
      $(this).hmtl(e.originalEvent.dataTransfer.getData('text/html'));
    }
    return false;
  })*/




// Initialize your app
var myApp = new Framework7({
  modalTitle: 'ToDo7'
});
Parse.initialize("SkcmLLkEl9UbR2fqz3mZAUCl0zHWAJ3HnTKEDHqB", "biOPe3X5DEoonXugY8PH2vZ2RLWa2Z4u3UlZGPSA");
// Export selectors engine
var $$ = Dom7;

// Add views
var mainView = myApp.addView('.view-main', {
  // Because we use fixed-through navbar we can enable dynamic navbar
  dynamicNavbar: true
});



$$('.popup').on('open', function () {
  $$('body').addClass('with-popup');
});
$$('.popup').on('opened', function () {
  $$(this).find('input[name="title"]').focus();
});
$$('.popup').on('close', function () {
  $$('body').removeClass('with-popup');
  $$(this).find('input[name="title"]').blur().val('');
});

// Popup colors
$$('.popup .color').on('click', function () {
  $$('.popup .color.selected').removeClass('selected');
  $$(this).addClass('selected');
});


// Add Task
$$('.popup .add-task').on('click', function () {
  var title = $$('.popup input[name="title"]').val().trim();
  if (title.length === 0) {
      return;
  }

  var color = $$('.popup .color.selected').attr('data-color');

      var TestObject = Parse.Object.extend("todo");
var testObject = new TestObject();
testObject.save({foo: title}).then(function(object) {
myApp.alert("ok")
});
 
  myApp.closeModal('.popup');
});


var html = '';



  var GameScore = Parse.Object.extend("todo");
var query = new Parse.Query(GameScore);
query.descending("createdAt")
query.find({
success: function(results) {
  console.log("Successfully retrieved " + results.length + " scores.");
  // Do something with the returned Parse.Object values
  for (var i = 0; i < results.length; i++) { 
    var object = results[i];

  

   var message=$$('.todo-items-list ');
  
  message.append("<ul><li>"+object.get("foo")+"</ul></li>")
  }
},
error: function(error) {
  cosole.log("Error: " + error.code + " " + error.message);
}
});


// Update app when manifest updated 
// http://www.html5rocks.com/en/tutorials/appcache/beginner/
// Check if a new cache is available on page load.
window.addEventListener('load', function (e) {
  window.applicationCache.addEventListener('updateready', function (e) {
      if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          myApp.confirm('A new version of ToDo7 is available. Do you want to load it right now?', function () {
              window.location.reload();
          });
      } else {
          // Manifest didn't changed. Nothing new to server.
      }
  }, false);
}, false);


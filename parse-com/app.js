$(document).ready(function() {
  var parseApplicationId = 'publicparseid'
  var parseJavaScriptKey = 'rahasia'

  Parse.initialize(parseApplicationId, parseJavaScriptKey)
  var Test = Parse.Object.extend('Test')
  var test = new Test()

  $('.btn-save').click(function() {
    try {
      var data = JSON.parse($('textarea').val())
    } catch(e) {
      alert('Invalid JSON')
    }

    if(!data) return false
    test.save(data, {
      success: function(object) {
        console.log('Parse.com object is saved: ', object)
        $('.log').html(JSON.stringify(object,null, 2))
      },
      error: function(object) {
        console.log('Error! Parse.com object is not saved: ', object)
      }
    })
  })
})

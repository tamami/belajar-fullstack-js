$(document).ready(function() {
  var parseApplicationId = 'publicparseid'
  var parseJavaScriptKey = ''

  Parse.initialize(parseApplicationId, parseJavaScriptKey)
  var Text = Parse.Object.extend('Test')
  var test = new Test()
})

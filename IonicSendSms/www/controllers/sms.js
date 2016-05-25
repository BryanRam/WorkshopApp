/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('smsController',function($scope,$cordovaSms){
  $scope.sms={};
 
    var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the default SMS app
      //intent: ''        // send SMS without open any other app
    }
    };
    
    $scope.sendSms=function(){
    console.log($scope.sms.number);
    console.log($scope.sms.message);
    
    $cordovaSms
        .send($scope.sms.number, $scope.sms.message, options)
          .then(function() {
              // Success! SMS was sent
              console.log('Success');
              alert('Success');
          }, function(error) {
          // An error occurred
              console.log(error);
              alert('Error');
        });//then
  }//sendSms
 
    
 
});

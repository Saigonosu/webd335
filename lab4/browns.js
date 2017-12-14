app.controller('BrownsCtrl', function($scope, $http) {
  var brownie = this;

  brownie.schedule = [];

  brownie.auth_key = 'c2FpZ29uOmJpZ2Rldg==';

  brownie.request_config = {
    method: 'GET',
    url: 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/full_game_schedule.json?team=Cle',
    headers: { "Authorization": "Basic " + brownie.auth_key}
  }

  brownie.buildSchedule = function(){
    $http(brownie.request_config)
      .then(function(response){
        brownie.schedule = response.data.fullgameschedule.gameentry;
      }, function(error){console.log(error);});
  }


})

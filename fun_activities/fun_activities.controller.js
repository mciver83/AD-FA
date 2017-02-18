angular
  .module('aloha')
  .controller('activitiesController', function($scope) {
    $scope.title = 'Fun Activities';

    $scope.funActivities = [
      {
        name: 'scuba diving',
        image: 'https://s-media-cache-ak0.pinimg.com/600x315/19/7f/11/197f11dce0bf9d6901bf22008ffd9b2a.jpg',
        coolness_level: 9
      },
      {
        name: 'hanging out with friends',
        image: 'https://michelleamorgan.files.wordpress.com/2012/05/friends_hanging_out_by_a_pool_pe0047544.jpg',
        coolness_level: 6
      },
      {
        name: 'being able to grow a beard',
        image: 'http://i.huffpost.com/gen/3466272/images/o-LEONARDO-DICAPRIO-facebook.jpg',
        coolness_level: 5
      }
    ]
  })

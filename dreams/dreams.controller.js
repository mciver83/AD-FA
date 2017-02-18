angular
  .module('aloha')
  .controller('dreamsController', function($scope) {
    $scope.title = 'Dreams';

    $scope.dreams = [
      {
        name: 'you were flying and making weird eagle sounds while your friends take photos of you and they are jealous',
        image: 'http://dreamstop.com/wp-content/uploads/2012/10/3177306183_fd0e6e9307_b.jpg',
        coolness_level: 8
      },
      {
        name: 'you show up to school and you are only wearing underwear',
        image: 'http://static.tvtropes.org/pmwiki/pub/images/nopantsjackie.jpg',
        coolness_level: 2
      },
      {
        name: 'you became mark',
        image: 'https://pbs.twimg.com/profile_images/612471301647654913/mpWTnT5I_400x400.jpg',
        coolness_level: 4
      }
    ]
  })

angular
  .module('aloha')
  .controller('animalsController', function($scope) {
    $scope.title = 'Animals';
    $scope.animals = [
      {
        name: 'sloth',
        image: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/05/cute-baby-sloth-institute-costa-rica-sam-trull-21.jpg',
        coolness_level: 5
      },
      {
        name: 'whale shark',
        image: 'http://assets.sheratondjibouti.com/lps/assets/u/466_Main_Whale_Shark_002.jpg',
        coolness_level: 7
      },
      {
        name: 'jake talley',
        image: 'https://scontent.xx.fbcdn.net/v/t31.0-8/12095002_10208307971925356_4357909842538682381_o.jpg?oh=04ae1a8917e136bca4cf83cba560f7ac&oe=5938B721',
        coolness_level: 10
      }
    ]
  })

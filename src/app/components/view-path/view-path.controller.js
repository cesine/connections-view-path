(function() {
  'use strict';

  angular.module('connectionsViewPath').directive('viewPath', function() {
    return {
      templateUrl: "app/components/view-path/view-path.html",
      restrict: 'A',
      scope: {
        node: '=model'
      },
      controller: function($scope) {
        $scope.path = {
          from: {
            id: '123abc',
            full_name: 'You',
            thumbnail_url: 'http://thumb7.shutterstock.com/display_pic_with_logo/195826/195826,1277161739,1/stock-photo-beautiful-young-woman-face-55683694.jpg'
          },
          to: {
            id: '321swf',
            full_name: 'John',
            thumbnail_url: 'http://thumb1.shutterstock.com/display_pic_with_logo/438058/109441394/stock-photo-close-up-man-portrait-outdoor-109441394.jpg'
          },
          path: [{
            id: '876dwd',
            full_name: 'Peter',
            thumbnail_url: 'http://thumb7.shutterstock.com/display_pic_with_logo/384199/197274905/stock-photo-film-toned-grainy-portrait-of-laughing-young-employee-197274905.jpg'
          }, {
            id: '876dwd',
            full_name: 'Joan',
            thumbnail_url: 'http://thumb7.shutterstock.com/display_pic_with_logo/463936/96418745/stock-photo-asian-woman-smiling-happy-portrait-beautiful-mature-middle-aged-chinese-asian-woman-closeup-beauty-96418745.jpg'
          }, {
            id: '876dwd',
            full_name: 'Valua',
            thumbnail_url: 'http://thumb9.shutterstock.com/thumb_large/93178/93178,1226420551,2/stock-photo-close-up-portrait-of-elegance-teenage-girl-isolated-on-white-background-20364880.jpg'
          }]
        }

      }
    };
  });
})();

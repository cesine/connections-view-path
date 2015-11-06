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
        $scope.fromId = '123abc';
        $scope.toId = '321swf';
        
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
        };

        $scope.nodes = [{
          id: 'k3ewsd',
          full_name: 'Peter',
          thumbnail_url: 'http://thumb7.shutterstock.com/display_pic_with_logo/384199/197274905/stock-photo-film-toned-grainy-portrait-of-laughing-young-employee-197274905.jpg'
        }, {
          id: '89j3w',
          full_name: 'Joan',
          thumbnail_url: 'http://thumb7.shutterstock.com/display_pic_with_logo/463936/96418745/stock-photo-asian-woman-smiling-happy-portrait-beautiful-mature-middle-aged-chinese-asian-woman-closeup-beauty-96418745.jpg'
        }, {
          id: 'oai32',
          full_name: 'Valua',
          thumbnail_url: 'http://thumb9.shutterstock.com/thumb_large/93178/93178,1226420551,2/stock-photo-close-up-portrait-of-elegance-teenage-girl-isolated-on-white-background-20364880.jpg'
        }];

        $scope.findPath = function(fromId, toId) {
          console.log('requesting path from ' + fromId + ' to ' + toId);
          $scope.status = "loading...";
          CORS
            .makeCORSRequest({
              url: localStorage.getItem('neo4j_url'),
              query: ''
            })
            .then(function(response) {
              console.log('Received response', response);
              $scope.path = response;
            }, function(error) {
              console.log('There was a bug', error);
              $scope.error = error.userFriendlyErrorMessages.join(',');
            })
            .fail(function(exception) {
              console.log('There was a bug', exception);
              $scope.error = exception.message;
            }).done(function() {
              $scope.status = "";
              if (!$scope.$$phase) {
                $scope.$digest();
              }

            });
        };
      }
    };
  });
})();

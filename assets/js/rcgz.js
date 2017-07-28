/**
 * Created by hengfeihu on 2017/7/28.
 */
angular.module('rcgz', []).config(function ($stateProvider) {
    $stateProvider.state("rcgz", {
        url: "/rcgz",
        templateUrl: 'views/rcgz/rcgz-left.html',
        controller: function ($scope) {
            //$scope.text = "日常工作-左边";
            $scope.list = [
                {id: 1, title: "会议1"},
                {id: 2, title: "会议2"},
                {id: 3, title: "会议3"},
                {id: 4, title: "会议4"},
                {id: 5, title: "会议5"},
                {id: 6, title: "会议6"}
            ]
        },
        abstract: true
    }).state('rcgz.right', {
        url: '/:id',
        templateUrl: 'views/rcgz/rcgz-right.html',
        controller: 'rcgzRightCtrl'
    }).state('rcgz.first', {
        url: '',
        templateUrl: 'views/rcgz/rcgz-right.html'
    });
}).controller('rcgzRightCtrl', function ($scope, $stateParams) {
    $scope.leftid = $stateParams.id;
    $scope.text = '日常工作-右边';
});
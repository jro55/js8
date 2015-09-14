angular.module('myApp', [])

var mainController = function($scope, $interval) {
	$scope.slides = [
		{image: 'photos/001.jpg', description: 'Image 00'},
		{image: 'photos/002.jpg', description: 'Image 01'},
		{image: 'photos/003.jpg', description: 'Image 02'},
		{image: 'photos/004.jpg', description: 'Image 03'},
		{image: 'photos/005.jpg', description: 'Image 04'},
	]
	$scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $interval(function() {
    	
    	$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;}, 2000);
}

angular.module('myApp').controller("mainController", ['$scope', '$interval', mainController])
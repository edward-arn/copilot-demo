function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/member.html',
        controller: function($scope, $http) {
            $http.get('data/skills.json').success(function(data) {
                $scope.skills = data;
            });
        }
    };
}
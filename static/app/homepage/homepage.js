(function (angular) {
    var app = angular.module('mainApp');
    app.controller('homePageControl', ['loginService', '$state', '$scope', function (loginService, $state, $scope) {
        var that = this;

        that.hideTitle = function(){
            var text = document.getElementById('fadeoutTitle');
            document.getElementById('fadeoutTitle').style.opacity = '0';//fadeOut title
            document.getElementById('fadeinNav').style.opacity = '1';//fadeIn Nav
            setTimeout(() => text.remove(), 850);//remove title from DOM
            setTimeout(() => document.getElementById('fadeinMain').style.opacity = '1', 850);//fadeIn MainContent

        }

        

    }]);

})(angular);
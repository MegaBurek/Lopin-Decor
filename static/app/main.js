(function (angular) {
    //Kreiranje angular aplikacije.
    //Ova aplikacija nema dodatnih zavisnosti.
    //nalog: tatjanalopin@yahoo.com
    //sifra za FB : trambolina
    var app = angular.module('mainApp', ['ui.router', 'ngFileUpload', 'loginService']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        //Korensko apstraktno stanje, kontejner za ostala stanja.
        $stateProvider.state('app', {
            abstract: true,
            views: {
                navbar: {
                    templateUrl: 'app/homepage/navbar.tpl.html',
                    controller: 'homePageControl',
                    controllerAs: 'hc'
                },
                '': {
                    template: '<ui-view name=""></ui-view>'
                }
            }
        })
        $stateProvider.state('home', {
            url: '/',
            parent: 'app',
            views: {
                '': {
                    templateUrl: 'app/homepage/home.tpl.html',
                    controller: 'homePageControl',
                    controllerAs: 'hc'
                }
            }
        }).state('somePage', {
            parent: 'app',
            url: '/somePage',
            views: {
                '': {
                    templateUrl: 'app/somepage/somepage.tpl.html',
                    controller: 'someControl',
                    controllerAs: 'sc'
                }
            }
        }).state('login', {
            parent: 'app',
            url: '/login',
            views: {
                '': {
                    templateUrl: 'app/login/login.tpl.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'lc'
                }
            }
        }).state('register', {
            parent: 'app',
            url: '/register',
            views: {
                '': {
                    templateUrl: 'app/signup/register.tpl.html',
                    controller: 'regControl',
                    controllerAs: 'rc'
                }
            }
        }).state('makePost', {
            parent: 'app',
            url: '/makePost',
            views: {
                '': {
                    templateUrl: 'app/makepost/makepost.tpl.html',
                    controller: 'postcreateCtrl',
                    controllerAs: 'pcc'
                }
            }
        }).state('viewUsers', {
            parent: 'app',
            url: '/viewUsers',
            views: {
                '': {
                    templateUrl: 'app/admin_services/viewUsers.tpl.html',
                    controller: 'adminControl',
                    controllerAs: 'ac'
                }
            }
        }).state('userProfile', {
            parent: 'app',
            url: '/userProfile',
            views: {
                '': {
                    templateUrl: 'app/user_profile/user_profile.tpl.html',
                    controller: 'UserProfileCtrl',
                    controllerAs: 'up'
                }
            }
        });
    }]);
    // app.service('uiService', function () {
    //     this.showMainContent = false;

    //     this.setShowMainContent = function (showMainContent) {
    //         this.setShowMainContent = showMainContent;
    //     };

    //     this.getShowMainContent = function () {
    //         return this.setShowMainContent;
    //     };

    // });
})(angular);

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

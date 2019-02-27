(function (angular) {
    //Kreiranje novog modula
    var loginService = angular.module('loginService', []);
    var ls = undefined;
    loginService.factory('loginService', ['$http', function ($http) {
        if (!ls) {
            var ls = {
                loginListeners: [],
                logoutListeners: [],
                addLoginListener: function (scope, listener) {
                    var that = this;
                    //Listener je funkcija koja ce obraditi dogadjaj.
                    this.loginListeners.push(listener);
                    //Kada se scope unisti potrebno je izbaciti pretplatioca
                    //iz liste pretplatilaca.
                    var i = this.loginListeners.length - 1;
                    scope.$on('$destroy', function () {
                        that.loginListeners.splice(i, 1);
                    });
                },
                addLogoutListener: function (scope, listener) {
                    var that = this;
                    //Listener je funkcija koja ce obraditi dogadjaj.
                    this.logoutListeners.push(listener);
                    //Kada se scope unisti potrebno je izbaciti pretplatioca
                    //iz liste pretplatilaca.
                    var i = this.logoutListeners.length - 1;
                    scope.$on('$destroy', function () {
                        that.logoutListeners.splice(i, 1);
                    });
                },
                login: function (user, onSuccess, onFailure) {
                    var that = this;
                    return $http.post('/login', user).then(function (response) {
                        if (response.data['success'] == true) {
                            onSuccess();
                            for (var i = 0; i < that.loginListeners.length; i++) {
                                that.loginListeners[i](response.data);
                            }
                        } else {
                            onFailure();
                        }
                    },
                        function (reason) {
                            console.log(reason);
                        })
                },
                isLoggedIn: function (onTrue, onFalse) {
                    $http.get('/isLoggedin').then(function (response) {
                        if (response.data == true) {
                            onTrue();
                        } else {
                            onFalse();
                        }
                    },
                        function (reason) {
                            console.log(reason)
                        })
                },
                checkAdmin: function (onTrue, onFalse) {
                    $http.get('/checkAdmin').then(function (response) {
                        if (response.data == 'Admin') {
                            onTrue();
                        } else {
                            onFalse();
                        }
                    },
                        function (reason) {
                            console.log(reason)
                        })
                },
                getLoggedIn: function (onSuccess, onFailure) {
                    $http.get('/loggedInUser').then(function (response) {
                        onSuccess(response.data);
                    },
                        function (reason) {
                            onFailure(reason);
                        });
                },
                logout: function (onTrue, onFalse) {
                    var that = this;
                    $http.get('/logout').then(function (response) {
                        if (response.data['success'] == true) {
                            onTrue();
                            for (var i = 0; i < that.logoutListeners.length; i++) {
                                that.logoutListeners[i](response.data);
                            }
                        } else {
                            onFalse();
                        }
                    },
                        function (reason) {
                            console.log(reason)
                        })
                }
            }
        }
        return ls;
    }]);
})(angular);
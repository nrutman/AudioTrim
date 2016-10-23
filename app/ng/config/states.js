(function() {

    angular
        .module('audiotrim')
        .config(StatesConfig);

    function StatesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/load');

        $stateProvider
            .state({
                'name': 'app',
                'url': '',
                'controller': 'AppCtrl as app',
                'templateUrl': 'ng/app/app.html'
            })
            .state({
                'name': 'app.load',
                'url': '/load',
                'controller': 'LoadCtrl as load',
                'templateUrl': 'ng/load/load.html'
            })
            .state({
                'name': 'app.encode',
                'url': '/encode',
                'controller': 'EncodeCtrl as encode',
                'templateUrl': 'ng/encode/encode.html'
            })
            .state({
                'name': 'app.save',
                'url': '/save',
                'controller': 'SaveCtrl as save',
                'templateUrl': 'ng/save/save.html'
            });

    }

})();

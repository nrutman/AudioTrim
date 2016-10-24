(function() {

    angular
        .module('audiotrim')
        .factory('require', RequireFactory);

    function RequireFactory() {

        return require || angular.noop;

    }

})();

(function() {

    angular
        .module('audiotrim')
        .controller('HelloWorldCtrl', HelloWorldCtrl);

    function HelloWorldCtrl() {
        var self = this;

        this.foo = 'bar';
    }
})();

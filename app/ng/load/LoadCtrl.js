(function() {

    angular
        .module('audiotrim')
        .controller('LoadCtrl', LoadCtrl);

    function LoadCtrl(require) {

        var self = this;

        var fs = require('fs');
        var dialog = require('electron').remote.dialog;

        self.showOpenDialog = showOpenDialog;

        function showOpenDialog() {
            dialog.showOpenDialog(function(fileNames) {
                if (!fileNames) {
                    return;
                }

                console.log(fileNames);
            });
        }

    }

})();

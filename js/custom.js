(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/


    app.component('prmSearchAfter', {
        bindings: {parentCtrl: '<'},
        controller: 'prmSearchAfterController',
        template: ''
    });

    app.controller('prmSearchAfterController', [function () {
        var vm = this;

        angular.element(document).ready(function () {

            var footer = angular.element(document.querySelector('.uio-footer')),
                footerSpacing = angular.element(document.querySelector('.uio-footer-spacing')),
                prmSearchAfterEl = angular.element(document.querySelector('prm-search-after'));

            if (footer) {
                // We are on the front page. Move footer and make it visible
                prmSearchAfterEl.append(footer.detach().addClass('visible'));
            }
        });
    }]);

})();
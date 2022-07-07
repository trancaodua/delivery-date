define(
    [
        'uiComponent',
        'jquery',
        'ko'
    ],
    function(
        Component,
        $,
        ko
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'SmartOSC_Deliverydate/shipping/customblock'
            },

            initialize: function () {
                var self = this;
                this._super();
            }

        });
    }
);
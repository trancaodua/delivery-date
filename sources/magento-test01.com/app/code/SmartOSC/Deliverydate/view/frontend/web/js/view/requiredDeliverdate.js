define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'SmartOSC_Deliverydate/js/model/requiredDeliverdate'
    ],
    function (Component, additionalValidators, requiredDeliverdate) {
        'use strict';
        additionalValidators.registerValidator(requiredDeliverdate);
        return Component.extend({});
    }
);
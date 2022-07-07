define(
    [
        'jquery',
        'mage/validation'
    ],
    function ($) {
        'use strict';

        return {

            /**
             * Validate checkout agreements
             *
             * @returns {Boolean}
             */
            validate: function () {
                var validationResult = false;
                var delivery = jQuery('[name="delivery_date"]').val()
                if(delivery){ //should use Regular expression in real store.
                    validationResult = true;
                }
                return validationResult;
            }
        };
    }
);
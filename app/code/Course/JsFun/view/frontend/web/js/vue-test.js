/**
 * The properties defined within the attribute are now accessible within the callback. For example,
 * the "message" property is now accessible as config.message.
 */
define(['vue', 'jquery', 'Course_JsFun/js/jquery-log'], function(Vue, $) {
    'use strict'

    $.log("Testing into the console")

    return function(config, element) {
        return new Vue({
            el: '#' + element.id,
            data: {
                message: config.message
            }
        });
    };
});

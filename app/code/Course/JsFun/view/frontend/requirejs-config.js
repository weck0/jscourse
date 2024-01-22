var config = {
    "map": {
        "*": {
            "Magento_Review/js/submit-review":"Course_JsFun/js/submit-review"
        }
    },
    "paths": {
        "vue": ["https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue",
            "Course_JsFun/js/vue"
            ]
    },
    "shim": {
        "Course_JsFun/js/jquery-log": ["jquery"]
    },
    "deps": ["Course_JsFun/js/every-page"],
    "config": {
        "mixins":{
            "Magento_Ui/js/view/messages":{
                "Course_JsFun/js/messages-mixin": true
            }
        }
    }
}

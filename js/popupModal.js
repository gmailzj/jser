define(function() {


    //计算坐标

    function getPosition(obj) {
        var st = $("body").scrollTop();
        var sl = $("body").scrollLeft();
        var rect = $('.' + obj.container).get(0).getBoundingClientRect();
        console.log(rect);

        var top = st + (document.documentElement.clientHeight - rect.height) / 2;
        var left = sl + (document.documentElement.clientWidth - rect.width) / 2;

        console.log(top, left);

        return { left: left, top: top };
    }

    //
    function _hide(obj) {
        obj.$floatbg.remove();
        obj.$container.remove();
    }

    /**构造函数
     *
     */
    function Dialog(floatbg, container) {
        this.isShow = 0;
        floatbg = floatbg || 'floatbg';
        container = container || 'popup-container';
        this.floatbg = floatbg;
        this.container = container;
    }

    Dialog.prototype.alert = function(str, canAutoClose, fn) {
        var obj = {
            isShowCancelBtn: 0,
            okText: "知道了",
            message: str || ''

        }

        if (typeof fn === 'function') {
            obj.okCallback = fn;
        }

        if (canAutoClose !== undefined) {
            obj.canAutoClose = parseInt(canAutoClose);
        }

        this.confirm(obj);
    }

    Dialog.prototype.confirm = function() {

        //是否存在背景
        if ($("." + this.floatbg).length) {
            //兼容以前的共用浮层的
            $("." + this.floatbg).removeClass('hide');
        } else {
            $("body").append('<div class="' + this.floatbg + '"></div>');
        }
        var _this = this;
        var icon = "images/alert.png";
        var defaultOptions = {
            icon: icon,
            //大标题
            title: '',
            //小标题
            message: '',
            hideIcon: 0,
            okText: "确 定",

            btnTheme: '',
            //确定按钮class
            okType: "button-positive",
            cancelText: "取 消",

            //取消按钮class
            cancelType: "button-calm button-outline",
            //强制设置横竖屏旋转
            rotate: 0, // 默认竖屏0, 横屏90
            //是否显示Btn
            isShowBtns: 1,
            //是否显示取消Btn
            isShowCancelBtn: 1,
            //是否可以点击遮罩来关闭
            canCloseByMask: 1,
            //自动关闭
            canAutoClose: 0,
            //确认按钮回调
            okCallback: function() {},
            //取消按钮回调
            cancelCallback: function() {}

        };

        var title, html;
        if ("string" == typeof arguments[0]) {
            defaultOptions.subTitle = arguments[0];
            defaultOptions.isShowBtns = 0;
        } else if ("object" == typeof arguments[0]) {
            var options = arguments[0];
            options = $.extend(defaultOptions, options);

            title = '<img class="border-radius-4" src="' + (options.icon) + '"/>';
            if (options.title) {

                if (options.hideIcon) {
                    title = '<div class="title margin-top-15">' + options.title + "</div>"
                } else {
                    title += '<div class="title">' + options.title + "</div>"
                }

            } else {
                options.hideIcon && (title = "")
            }
            options.subTitle = options.message || "";

            options.btnTheme && (options.okType = "button-" + options.btnTheme);

            var rotate = options.rotate,
                rotateCss = '';
            if (rotate > 0) {
                rotateCss = 'transform: rotate(' + rotate + 'deg)';
            }
            html = '<div class="' + this.container + '" style="display:none;">';
            html += '        <div class="popup" style="' + rotateCss + '">',
                html += '            <div class="popup-head">'
            html += '                <h3 class="popup-title">' + title + '</h3>',
                html += '                <h5 class="popup-sub-title" style="">' + options.subTitle + '</h5>',
                html += '            </div>',
                html += '            <div class="popup-buttons">',

                options.isShowCancelBtn && (html += '                <button class="button cancel ' + options.cancelType + '">' + options.cancelText + '</button>'),
                html += '                <button class="button ok ' + options.okType + '">' + options.okText + '</button>',
                html += '            </div>',
                html += '        </div>',
                html += '    </div>';
            $("body").append(html);

            //计算浮层坐标


            this.$floatbg = $("." + this.floatbg);
            this.$container = $("." + this.container);
            this.$container.show();
            var position = getPosition(this);
            this.$container.css("left", position.left);
            //this.$container.css("top",position.top);

            var _this = this;
            if (options.canCloseByMask) {
                this.$floatbg.on("click", function() {
                    _hide(_this);
                });
            }
            //取消btn
            if (options.isShowBtns && options.isShowCancelBtn) {
                this.$container.find(".popup-buttons button.cancel").on("click", function() {
                    if (options.cancelCallback) {
                        options.cancelCallback.call();
                    }
                    _hide(_this);
                })
            }
            //确定btn
            if (options.isShowBtns) {
                this.$container.find(".popup-buttons button.ok").on("click", function() {
                    if (options.okCallback) {
                        options.okCallback.call();
                    }
                    _hide(_this);
                })
            }

            //自动关闭
            if (options.canAutoClose) {
                setTimeout(function() { _hide(_this); }, options.canAutoClose);
            }
            return false;
        }

    }
    "object" == typeof module && "object" == typeof module.exports ? module.exports = Dialog : "function" == typeof define && define.amd && define("popupModal", [], function() {
        return x
    })
    return Dialog;
})
require(["popupModal"], function(PopupModel) {


    //文档加载完
    $(document).ready(function() {
        var popupModel = new PopupModel;

        $("#btn-1").on("click", function() {
            popupModel.confirm({
                title: "恭喜！验证通过！",
                rotate: 90
            });
            //popupModel.confirm({title:"还差一步，完成验证",message:"新用户需安装用户验证文件，一次安装，永久有效",isShowCancelBtn:0,okText:"立即验证",btnTheme : "assertive"});

        })



        $("#btn-2").on("click", function() {

            popupModel.confirm({

                hideIcon: !0,
                isShowCancelBtn: 0,
                btnYesText: "很好，继续赚钱",
                btnTheme: "assertive",
                title: '<div class="assertive text-center">恭喜! 完成！</div><div class="text-center margin-top-15" style="font-size:14px">完成 限时任务</div>',
                //message:'<div class="divider-20"></div><div class="assertive margin-bottom"><div class="width-32 text-right margin-top-3">+</div><div class="width-33 fs-40 ff-35 text-center"></div><div class="width-33 text-left margin-top-3">元</div></div><div class="divider-5"></div>',

                okCallback: function() {
                    return false;
                },
            })
        })

        $("#btn-3").on("click", function() {
            //popupModel.confirm({title:"恭喜！验证通过！"});
            popupModel.confirm({ title: "还差一步，完成验证", message: "新用户需安装用户验证文件，一次安装，永久有效", isShowCancelBtn: 0, okText: "立即验证", btnTheme: "assertive", canCloseByMask: 0 });

        })

        $("#btn-4").on("click", function() {
            popupModel.alert("请输入关键字");
        })

    })
})
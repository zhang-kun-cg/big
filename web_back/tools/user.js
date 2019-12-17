var use = {
    dl: function (obj) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: obj.data.a,
                password: obj.data.b
            },
            success: function (res) {
                if (res.code === 200) {
                    obj.success();
                } else {
                    obj.fail();
                }
            }
        })
    },
    tc: function (obj) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    obj.success();
                } else {
                    obj.fail();
                }
            }
        })
    },
    xinxi: function (obj) {
        $.ajax({
            url: GETUSER,
            success: function (res) {
                if (res.code === 200) {
                    obj.success(res);
                }
            }
        })
    },
    //修改信息获取发送
    xiugai1: function (obj) {
        $.ajax({
            url: GET,
            success: function (res) {
                if (res.code === 200) {
                    obj.success(res);
                }

            }
        })
    },
    //修改信息修改发送
    xiugai2: function (obj) {
        $.ajax({
            type: 'post',
            url: GET2,
            data: obj.data,
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.code === 200) {
                    obj.success();
                }
            }
        })
    }
}

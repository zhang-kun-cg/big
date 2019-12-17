var act = {
    // 添加文章类名
    add: function (obj) {
        $.ajax({
            type: 'post',
            url: ADD,
            data: obj.data,
            success: function (res) {
                if (res.code === 200) {
                    obj.success();
                } else {
                    obj.fails();
                }
            }
        })
    },
    // 获取文章分类
    actget: function (obj) {
        $.ajax({
            url: ACT_GET,
            success: function (res) {
                if (res.code === 200) {
                    obj.success(res);
                }
            }
        })
    },
    //编辑文章分类
    edit: function (obj) {
        $.ajax({
            type: 'post',
            url: ACT_EDIT,
            data: $('form').serialize(),
            success: function (res) {
                if (res.code === 200) {
                    obj.success();
                } else {
                    obj.fails();
                }
            }
        })
    },
    // 删除
    close: function (obj) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:8000/admin/category_delete',
            data: {
                id: obj.id
            },
            success: function (res) {
                if (res.code === 200) {
                    obj.success();
                } else {
                    obj.fails();
                }
            }
        })
    }
}
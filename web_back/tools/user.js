function dl(data, obj) {
    $.ajax({
        type: 'post',
        url: LOGIN,
        data: {
            user_name: data.a,
            password: data.b
        },
        success: obj
    })
}
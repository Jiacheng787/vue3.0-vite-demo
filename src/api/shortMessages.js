import request from '/@/utils/request'

let shortMessages = {};

shortMessages.send = function(data) {
    return request({
        url: 'ec/api.php?mod=leads&act=getvalidatecode',
        data,
        method: 'post'
    })
}

export default shortMessages
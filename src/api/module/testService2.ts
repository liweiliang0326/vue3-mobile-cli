import http from '../axios';

export default {

    // 根据名称获取用户
    // httpGetUserByWord(params: string) {
    //     return http({
    //         method: 'get',
    //         url: '/supervise/p-supervise/find-user',
    //         params,
    //     });
    // },

    // PM10污染排名Top5
    httpPostPM10Top5() {
        return http({
            method: 'post',
            url: '/govweixin/citybuilding-dwd-construction-dust-detail-h/findByPM10'
        })
    }

}


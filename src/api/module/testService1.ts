import http from "../axios"

export default {

    // 根据名称获取用户
    // httpGetUserByWord(params: string) {
    //     return http({
    //         method: 'get',
    //         url: '/supervise/p-supervise/find-user',
    //         params,
    //     });
    // },

    // 获取项目数量
    httpGetProjectCount() {
        return http({
            method: 'get',
            url: '/govweixin/citybuilding/f-project/count-project-ing',
        })
    }

}


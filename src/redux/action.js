import {reqLogin, reqRegister, reqUpdateUser} from "../api";
import {AUTH_SUCCESS, ERROR_MSG} from "./action_type";

// 授权成功的同步action
const authSuccess = user => ({type: AUTH_SUCCESS, data: user});
// 错误提示信息的同步action
const errorMsg = msg => ({type: ERROR_MSG, data: msg});
// 注册异步action
export const register = (user) => {
    const {username, password, confirmPassword, type} = user;
    if(!username) {
        return errorMsg('用户名必须指定')
    }else if(password !== confirmPassword) { // 表单的密码验证
        return errorMsg('两次密码输入不一致')
    }

    return async dispatch => {
        // 发送注册的异步的ajax请求
        const response = await reqRegister({username, password, type});
        const result = response.data; // {code: 0/1, data: user, msg}
        if(result.code === 0){
            // 成功
            // 分发授权成功的同步action
            dispatch(authSuccess(result.data))
        }else {
            // 失败
            // 错误提示信息的同步action
            dispatch(errorMsg(result.msg))
        }
    }
};
// 登陆异步action
export const login = (user) => {
    const {username, password} = user;
    if(!username) {
        return errorMsg('用户名必须指定')
    }else if(!password) { // 表单的密码验证
        return errorMsg('密码必须指定')
    }
    return async dispatch => {
        // 发送注册的异步的ajax请求
        const response = await reqLogin(user);
        const result = response.data;
        if(result.code === 0){
            // 成功
            // 分发授权成功的同步action
            dispatch(authSuccess(result.data))
        }else {
            // 失败
            // 错误提示信息的同步action
            dispatch(errorMsg(result.msg))
        }
    }
}
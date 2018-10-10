/**
 * 定义reducers函数，根据指定的action返回一个新的state
 * /*/
import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERROR_MSG} from "./action_type";

const initUser = {
    username: '', // 用户名
    type: '', // 用户类型
    msg: '' // 提示错误信息
};
function user(state = initUser, action) {
    switch(action.type) {
        case AUTH_SUCCESS: // data是user
            return {...state, ...action.data};
        case ERROR_MSG: // data是msg
            return {...state, msg: action.data};
        default:
            return state
    }
}

export default combineReducers({
    user
})
// 向外暴露的目录结构为{user: {username: '', type: '', msg: ''}}

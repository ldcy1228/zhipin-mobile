/*
* 包含n个请求函数模块
* 返回值为propmise*/
import ajax from './ajax'

// 注册接口
export const reqRegister = (user) => ajax('/register', user, 'POST');
// 登陆接口
export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST');
// 更新用户
export const reqUpdateUser = (user) => ajax('/update', user, 'POST');

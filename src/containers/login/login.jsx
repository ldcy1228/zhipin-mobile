/*

*登陆路由组件
 */

import React, { Component } from 'react'
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Button } from "antd-mobile";
import Logo from './../../components/logo/logo';

const ListItem = List.Item;

class Login extends Component {
    state = {
        username: '', // 用户名
        password: '', // 密码
      };
      login = () => {
        console.log(this.state)
      };
      handChange(name, val) {
        this.setState({
          [name]: val
        })
        // console.log('username:'+val)
      }
    render() {
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo />
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <List>
                        <InputItem onChange={val => this.handChange('username', val)} clear>用户名</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem onChange={val => this.handChange('password', val)} clear type="password">密码</InputItem>
                        <WhiteSpace></WhiteSpace>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陆</Button>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={() => this.props.history.replace('/register')}>还没有账户吗？ 去注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login
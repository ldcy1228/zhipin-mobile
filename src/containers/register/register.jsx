/*

*注册路由组件
 */

import React, { Component } from "react";
import {connect} from 'react-redux';
import Logo from "./../../components/logo/logo.jsx";
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from "antd-mobile";
import {register} from "../../redux/action";

const ListItem = List.Item;

class Register extends Component {
  state = {
    username: '', // 用户名
    password: '', // 密码
    confirmPassword: '', // 确认密码
    type: 'JobSeekers', // 用户类型 求职者(Job seekers)/老板(boss)
    rolling: '获取验证码'
  };
  register = () => {
    // console.log(this.state)
      this.props.register(this.state);
      
  };
  handChange(name, val) {
    this.setState({
      [name]: val
    })
    // console.log('username:'+val)
  }
  render() {
    const {type} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
          <WingBlank>
            <List>
              <InputItem placeholder='用户名/手机号码/email' clear onChange={val => this.handChange('username', val)}>用户名</InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem placeholder='请输入密码' clear type="password" onChange={val => this.handChange('password', val)}>密码</InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem placeholder='请确认密码' clear type="password" onChange={val => this.handChange('confirmPassword', val)}>确认密码</InputItem>
              <ListItem>
                <span>用户类型</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio checked={type === 'JobSeekers'} onChange={() => this.handChange('type', 'JobSeekers')}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio checked={type === 'boss'} onChange={() => this.handChange('type', 'boss')}>老板</Radio>
              </ListItem>
              <ListItem>
                <div style={{width: "100%"}}>
                <input type="number" style={{width: "50%", border: 0}} pattern="[0-9]*" placeholder="请输入验证码"/>
                <button style={{width: "50%", border: 0, padding: "10px 8px", borderRadius: "5px", background: "#4cd96f", color: "#fff"}}>{this.state.rolling}</button>
                </div>
              </ListItem>
              <WhiteSpace></WhiteSpace>
              <Button onClick={this.register} type="primary">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
              <WhiteSpace></WhiteSpace>
              <WhiteSpace></WhiteSpace>  
              <Button onClick={() => this.props.history.replace('/login')}>已有账户</Button>
            </List> 
        </WingBlank>
      </div>
    );
  }
}
export default connect(
    state => ({}),
    {register}
)(Register);

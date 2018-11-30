import {computed, observable, action} from "mobx";
import axios from 'axios';

// configure({enforceActions: true});   //严格规范


export default class User {

    @observable loginState; //登录状态
    @observable userAccount;//帐户
    @observable userRole;    //用户角色
    @observable userName;   //用户名
    @observable userPic;    //用户头像
    @observable userScore;   //用户积分
    @observable userTipsNum; //提示信息数量

    /**
     * 用户登录
     * @param userAccount
     * @param passWord
     */
    @action login = (userAccount, passWord) => {
        axios.post('', {}).then((data) => {

        }).catch((error) => {

        });
    };

    /**
     * 用户登出
     */
    @action logout = () => {

    };

};
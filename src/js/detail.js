import React,{Component} from 'react';
import { render } from 'react-dom';
import '../css/less/detail.less';

export default class Detail extends Component{
    render(){
        return <div>
            <h2>这是详情页面！</h2>
            <p>这是一个P，测试是否继承了style.css的样式</p>
            <button onClick={this.clickHandle.bind(this)}>点我</button>
        </div>
    };
} ;
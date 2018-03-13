import React,{Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory,Link,IndexRoute,browserHistory } from 'react-router';

export default class Inbox extends Component{
    render() {
        // console.log(this.props);
        // this.props.route.childRoutes
        return (
            <div>
                <ul>
                    <li><Link to="/">返回首页(xxxx)</Link></li>
                    {/*这里是对嵌套路由做的一些处理，吧上面的console解注释，看看输出什么*/}
                    {this.props.route.childRoutes.map((item,i)=>{
                        return <li key={i}><Link to={'/inbox/'+item.path}>{item.title}</Link></li>
                    })}
                </ul>
                {/*不要忘记这里*/}
                {this.props.children}
            </div>
        )
    }
}
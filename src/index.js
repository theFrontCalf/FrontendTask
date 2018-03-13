import { Router, Route, hashHistory,Link,IndexRoute,browserHistory } from 'react-router';
import React,{Component} from 'react';
import { render } from 'react-dom';
import './css/style.less';

import App from './js/app';

const detailContainer = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./js/detail').default)
  },'detail')
}
const inboxContainer = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./js/inbox').default)
  },'inbox')
}
const paymentContainer = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./js/payment').default)
  },'payment')
}
const myorderContainer = (location, cb) => {
  require.ensure([], require => {
      cb(null, require('./js/myorder').default)
  },'myorder')
}
// import Detail from './js/detail';
// import Inbox from './js/inbox';
// import Payment from './js/payment';
// import MyOrder from './js/myorder';

let key = 0;
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route key={++key} path="/detail" getComponent={detailContainer} />
      <Route key={++key} path="/inbox" getComponent={inboxContainer} >
        <Route path="payment.html" getComponent={paymentContainer} title="我的支付"/>
        <Route path="myorder.html" getComponent={myorderContainer} title="我的订单"/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
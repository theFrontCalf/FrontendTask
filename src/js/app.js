import React,{Component} from 'react';
import {Link} from 'react-router';
import { Row, Col, Icon, Checkbox, Select } from 'antd';
import $ from 'jquery';

class App extends Component{
// })
// const App = React.createClass({
  constructor(){
    super()
    this.state = {
      roomStu:'Jane Doe, John Doe, and 2 other friends have stayed here'
    }
  }
  //获取兄弟元素方法
  sibling( elem ) {
    var r = [];
    var n = elem.parentNode.firstChild;
    for ( ; n; n = n.nextSibling ) {
      if ( n.nodeType === 1 && n !== elem ) {
        r.push( n );
      }
    }
    return r;
  }
  //列表点击事件
  listClick(e){
    let elId = typeof(e) == "string"? e : e.target.id;
    let that = this;
    //获取数据
    fetch("../src/json/friends.json")
    .then(function(res){
    }).then(function(json){
      console.log(json)
      for(let key in json){
        if(elId == key){
          let stuNum = json[key].friends.length;
          let roomstu = "";
          const roomNumInfoObj = document.getElementsByClassName("roomNumInfo")[0];
          if(stuNum == 0){
            roomNumInfoObj.style.display = 'none';
          }else{
            roomNumInfoObj.style.display = 'block';
          }
          stuNum == 1? roomstu = "Jane Doe has stayed here":stuNum == 2? roomstu = "Jane Doe and John Doe have stayed here":stuNum == 3? roomstu = "Jane Doe, John Doe, and 1 other friend have stayed here":stuNum == 3? roomstu = "Jane Doe, John Doe, and 2 other friends have stayed here":"";
          that.setState({roomStu:roomstu})
        }
      }
    })
    if(e.target){
      this.sibling(e.target).forEach(function(item,i){
        item.className = '';
        item.innerHTML =  item.innerText;
      })
      e.target.className = "active";
      e.target.innerHTML += '<img src="../../img/right.png"/>';
    }
    this.render();
  }
  render() {
    return (
      <div className="home">
        {/*<h1>Welcome to the app!</h1>
        <ul>
          <li><Link to="/detail">详情页</Link></li>
          <li><Link to="/inbox">个人中心</Link></li>
        </ul>
        {this.props.children}*/}
        <Row>
          <Col>
            <div className="headerbar">
              <div>Home<Icon type="right" /></div>
              <div>Accommodation<Icon type="right" /></div>
              <div>London<Icon type="right" /></div>
              <div>My Property<Icon type="right" /></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="headerbanner">
              <div>
                <p>My Property,London</p>
                <p>2 Riding House Stree,W1W 7FA </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <div className="middleContentLeft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis.
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="middleContentRight">
              <div><Icon type="star"/> Reated Average of 4.7 by 277 students</div>
              <div><Icon type="home"/> 588 Total Beds</div>
              <div>
                <button>Contact and expert</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col><h1 className="bottomLeftTitle">Room Types</h1></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={5} lg={5} xl={5}>
            <div className="bottomLeft">
              <div className="bottomLeftList">
                <ul onClick={this.listClick.bind(this)}>
                  <li className="active" id="deluxe">Deluxe<img src="../../img/right.png"/></li>
                  <li id="shared">Shared</li>
                  <li id="animal-friendly">Animal Friendly</li>
                  <li id="another">Super Deluxe</li>
                  <li id="and-another">Another room type</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div className="bottomLeft">
              <div className="bottomLeftList">
                <Select defaultValue="deluxe" style={{ width:'100%'}} onChange={this.listClick.bind(this)}>
                  <Select.Option value="shared">Shared</Select.Option>
                  <Select.Option value="animal-friendly">Animal Friendly</Select.Option>
                  <Select.Option value="another">Another</Select.Option>
                  <Select.Option value="and-another">Another room type</Select.Option>
                </Select>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <div className="bottomRight">
              <div className="bottomRightTitle">
                <img src="../../img/4.png"/>
                <div>
                  <h1>Animal Friendly Room</h1>
                  <div>The Accommodation for pet lovers</div>
                </div>
              </div>
              <div className="bottomRightContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis
              </div>
              <div className="bottomRightContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa, aperiam alias nam architecto non aspernatur impedit obcaecati illum molestiae consequatur omnis, maiores quo laboriosam! Voluptate ea rem doloremque veritatis
              </div>
              <div className="bottomRightContent roomNumInfo">
                <Icon type="share-alt"/> &nbsp;&nbsp;  
                <span> {this.state.roomStu} </span>
              </div>
              <div className="checkbox">
                <h1>facilities</h1>
                <div className="checkboxList">
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                      <div><Checkbox>Television</Checkbox></div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default App;
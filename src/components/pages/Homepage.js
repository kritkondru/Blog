import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Homepage extends Component {
  render() {
    return (
      <div className="item1">
      <p>
      Welcome to my First Tech-Blog
      JavaScript...!!!!
</p>

<img src={require('./angularjs.png')} width='150' height='150'/>
<img src={require('./nodejs-new-pantone-black.png')} width='150' height='150'/>
<img src={require('./react.png')} width='150' height='150'/><br/>
<img src={require('./AI.jpg')} width='130' height='120'/>
<img src={require('./ml.png')} width='190' height='150'/>
<img src={require('./DL.png')} width='150' height='130'/>


      </div>
    );
  }
}

export default Homepage;

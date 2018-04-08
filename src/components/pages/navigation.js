import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="item2">
      <nav className="nav1">
      <ul>
      <li ><a href src="/Blog1" >Blog1</a></li>
      <li><a href="/Blog2">Blog2</a></li>
      <li ><a href="/Blog3">Blog3</a></li>
      </ul>
      </nav>
      </div>
    );
  }
}

export default Navigation;

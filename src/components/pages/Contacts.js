import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return (
<div className="mainn">

<form action="/action_page.php">

  Name:<br>

  <input type="text" name="firstname" value="   " >

  <br>

  Subject:<br>

  <input type="text" name="subject" value="    " >

  <br>

  Message:<br>

  <input type="text" name="message" value="    " >

  <br>

  <br>

  <input type="submit" value="Submit" >

</form>

</div>
);
export default Contact;

import React from 'react';
import { Link } from 'react-router';

function Header (props) {

  return (
    <ul className="nav">
      <li><Link to="/home">Home</Link></li>
      <li className="social-top">
        <iframe src="https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.whatami-quiz.com&width=105&layout=button_count&action=like&size=small&show_faces=false&share=true&height=46&appId=124165410962504" width="105" height="25" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
      </li>
    </ul>
  )
}

export default Header;

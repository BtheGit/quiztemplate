import React from 'react';
import { Link } from 'react-router';
import QuizProgress from '../QuizProgress/QuizProgress';
import meta from '../../api/metadata_whatami.js';

function Header (props) {

  const likeUrl = 'https://www.facebook.com/plugins/like.php?href='+meta.url+'&width=105&layout=button_count&action=like&size=small&show_faces=false&share=false&height=46';

  return (
    <div>
      <ul className="nav">
        <li><QuizProgress displayType="numeric"></QuizProgress></li>
        <li className="social-top">
          <iframe src={likeUrl} width="70" height="25" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
        </li>
      </ul>
      <QuizProgress displayType="graphic"></QuizProgress>
    </div>
  )
}

export default Header;

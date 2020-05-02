import React from 'react';

const Header = () =>{
    return <header className="header">
    <div className="searcher">
      <img className="logo" src="https://img.icons8.com/material-rounded/384/steam.png" />
      <form className="inputSearch">
        <p><input></input></p>
      </form>
    </div>
    <div className="userData">
      <img className="userPhoto1" src="https://cs419916.vk.me/v419916664/98af/7hYFi0_EoLo.jpg" />
      <p className="pageName"><a>Дима Курган</a></p>
      <p className="msg"><a>Сообщения</a></p>
      <p className="messageCount"><a>99+</a></p>
      <img className="userPhoto2" src="https://i7.pngflow.com/pngimage/98/601/png-computer-icons-social-media-user-facebook-login-mystery-shopper-head-social-media-silhouette-linkedin-clipart.png" />
    </div>
  </header>
}

export default Header;
import React from 'react';

const Navbar = () =>{
    return <nav className="sidebar">
    <div className="photo-wrap">
      <img className="userPhotoBig" src="https://gameinside.ua/wp-content/uploads/2017/10/Miracle-.jpg" />
      <p><a>Дима Курган</a></p>
    </div>
    <div className="list-wrap">
      <ul className="list">
        <li><a>Домой</a></li>
        <li><a>Справка</a></li>
        <li><a>Фотографии</a></li>
        <li><a>Лайки</a></li>
        <li><a>Истории</a></li>
        <li><a>Видео</a></li>
      </ul>
      <button className="create">Создать страницу</button>
    </div>
  </nav>
}

export default Navbar;
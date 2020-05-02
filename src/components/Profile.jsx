import React from 'react';

const Profile = () =>{
    return  <main className="mainContent">
    <div className="coverPicture">
      <img src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
    </div>
    <div className="setPage">
      <div className="buttonsSettings">
        <div className="formWrap">
          <form className="firstForm">
            <button className="like">Лайки</button>
            <button className="follow">Подписки</button>
            <button className="share">Поделиться</button>
            <button className="more">Больше информации</button>
          </form>
          <form className="secondForm">
            <button className="messages">Сообщения</button>
          </form>
        </div>
      </div>
      <div className="statusPhotoVideo">
        <div className="statusManage">
          <div className="writeStatus">
          <a><img src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643749-edit-pen-pencil-write-writing_113397.png"/></a>
          <a><p>Статус</p></a>
          </div>
          <div className="addPhotoV">
          <img src="https://img.icons8.com/plasticine/2x/camera.png"/>
          <a><p>Добавьте фото/видео</p></a>
          </div>
        </div>
        <div className="statusDescription">
          <div className="descFoto">
            <a><img src="https://klike.net/uploads/posts/2018-12/1543824606_18.jpg"/></a>
          </div>
          <div className="descText">
             <form>
               <input placeholder="Напишите что-нибудь о себе..."></input>
              </form> 
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="appPage">
        <h3><a>Страница приложения</a></h3>
      </div>
      <div className="searchPage">
        <form>
          <input placeholder="Поиск по постам на данной странице..."></input>
        </form>
      </div>
      <div className="inviteFriends">
        <div className="wrapIcon"><a><img src="https://st4.depositphotos.com/3538469/23046/v/450/depositphotos_230468266-stock-illustration-add-user-sign-icon-add.jpg" /></a></div>
        <div className="wrapText"><a><p>Добавить друзей</p></a></div>
      </div>
      <div className="photoPreview">
        <div className="photoSettings">
          <p>Фотографии</p>
        </div>
        <div className="photoShare">
          <a>
            <img src="https://lh3.googleusercontent.com/proxy/tyr8HZXpvrbiE49yWr1JSSvQU9p-hUAp_8ipNqnQ8QkzZqYue-VNOGA59qQcXQrPABAkU1B8j8FNJACc_awO82q3avYntaOkjN4LFH5qQz3wUHfBwE2eLfizds5kRF2GhmMpjyo9"/>
          </a>
        </div>
      </div>
      <div className="likes">
        <div className="likeDescription">
          <p>Здесь будет описание, которое позволит понять, каким образом можно набирать лайки. Внимательно прочтите данные рекоммендации!</p>
        </div>
        <div className="likeIcon">
          <a><img src="https://sun9-24.userapi.com/c840425/v840425151/26b18/PJfbwdreZM4.jpg?ava=1"/></a>
        </div>
        <div className="likeCount">
          <h4><a>999 лайков!</a></h4>
          <p>Вас оценили 999 человек.</p>
        </div>
      </div>
    </div>
  </main>
}

export default Profile;
import React from 'react';
import { Router, Route, Link } from "react-router-dom";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

function checkFirstLoad(photos, getPhotos){
    if (!photos.length){
        return getPhotos(10);
    }
}

const FullPhoto = ({history, match, location}) => {
    console.log(match);
    console.log(location);
    const {state} = location;
    console.log(state);

    return (
        <div className="full-photo">
            <img className="img-full" src={state.urlFull} alt='Рандомная фотография (полная)'></img>
            <p>Автор: <a href={state.userLink}>{state.userName}</a></p>
            <span>Дата загрузки: {state.photoDate.slice(0, 10)}</span>
            <p><span>Likes: {state.likes}</span><button className="button-like" >Like</button></p>
            <button className="button-back" onClick={history.goBack}>Назад</button>
        </div>
    )
}

const Main = (props) => {
    const {photos, getPhotos} = props;
    
    return ( 
        <main onLoad={checkFirstLoad(photos, getPhotos)}>
            <Router history={history}>
                <Route path = "/img/:id" component={FullPhoto} />   
                {photos.map(com => {
                    return (
                            <div key={com.id} className='photos-one'>
                                <Link key={com.id}
                                    to={{
                                        pathname: `/img/${com.id}`,
                                        state: {
                                            userName: com.user.name,
                                            userLink: com.user.links.self,
                                            urlFull: com.urls.full,
                                            likes: com.likes,
                                            photoDate: com.created_at,
                                            makeLike: com.liked_by_user
                                            }
                                    }}>
                                    <img className='author-photo' src={com.urls.small} alt='Рандомная фотография (маленькая)'/>
                                </Link>
                                <br />
                                <span className='author-name'>Автор: <a href={com.user.links.self}>{com.user.name}</a></span>
                                <span className='likes-mount'>Лайки: {com.likes}</span>
                            </div>
                        );
                    })}
                    
            </Router> 
            <button className="button-more" onClick={ev => {getPhotos(photos.length + 10)}}>Больше фото</button>   
        </main>

    )
}



export default Main
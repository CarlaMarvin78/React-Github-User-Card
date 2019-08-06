import React from 'react';


export default function Card(props){
    const user=props.user;
return (
  <div class="card">
  <img src={user.avatar_url} />
  <div class="card-info">
    <h3 class="name">{user.name}</h3>
    <p class="username">{user.login}</p>
    <p>Location: {user.location}</p>
    <p>Profile:  
      <a href={user.html_url}>{user.html_url}</a>
    </p>
    <p>Followers: {user.followers}</p>
    <p>Following: {user.following}</p>
    <p>Bio: {user.bio}</p>
  </div>
  </div>
   
)
}


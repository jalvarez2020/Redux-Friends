import React from 'react';

export const Friend = (props) => {
        return (
             <div key={props.friend.id}>
                 <h1>{props.friend.name}</h1>
                 <h2>{props.friend.email}</h2>
                 <h3>{props.friend.age}</h3>
             </div>
        );
    
}
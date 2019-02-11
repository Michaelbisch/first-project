import React from 'react';

function Header(props){
    return(
        <h1 className="header">Workout for {props.name}</h1>
    )
}
export default Header
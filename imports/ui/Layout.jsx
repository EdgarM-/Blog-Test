import React from 'react';
const Layout = (props) =>{
  return (
    <div>
        <header>
          <h1> React-Blog</h1>
        </header>
        {props.children}
    </div>
)

} 

export default Layout;
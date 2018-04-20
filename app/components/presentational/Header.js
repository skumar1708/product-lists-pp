import React from 'react';

export default class Header extends React.Component{
        render(){
          return (
            <div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Cart</a></li>
              </ul>
            </div>
          )
        }
}
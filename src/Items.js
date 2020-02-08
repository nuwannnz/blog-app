import React from 'react';
import './Items.css';
import Card from '@material-ui/core/Card';

function Items() {
  return (
    <div className="Items">
      <header className="Items-header">
        <div className="wrap-frame">
          <h1>My Weekly Posts</h1>
        </div>

        <div class="card">
           <div className="color-bar"></div>
            <div class="container">
                <h4><b>First Week</b></h4> 
                <p>2020.2.8</p> 
            </div>
        </div>

      </header>  
    </div>
   
  );
}

export default Items;
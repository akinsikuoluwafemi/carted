import React from 'react';
import './App'
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">column number one</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home"/>
          </span>
        </div>
      </div>
    </div>
  );
}

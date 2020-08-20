import React from 'react';
import history from '../services/history';

export default function AutoSuggest(props) {
  const nav = {
      titles: ["Table Of Contents", "Categories"],
      link: ["toc","categories"],
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mr-auto">
                <li class={props.link == "home" ? "nav-item active" : "nav-item"}>
                  <a class="nav-link" href="" onClick = {() => {
                    history.push('/home');
                  }}>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class={props.link == "toc" ? "nav-item dropdown active" : "nav-item dropdown"}>
                  <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Table of Contents</a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="" onClick = {() => {
                      history.push('/toc',{source: props.source});
                    }}>Read Light Novels</a>
                  </div>
                </li>
                <li class={props.link == "categories" ? "nav-item active" : "nav-item"}>
                  <a class="nav-link" href="" onClick = {() => {
                    history.push('/categories');
                  }}>Categories</a>
                </li>
              </ul>
              { props.link == "toc" ? <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search Novels" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> : <div/> }
            </div>
          </nav>
    </div>
  );
}

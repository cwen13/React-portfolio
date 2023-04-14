import React from 'react';

export Navigation = (props) => {
  return (
    <nav class="d-flex flex-coulumns justify-content-center">
      <h1> Cody  Wenrich </h1>
      <ol class="nav justify-content-center">
	<li class="nav-item" ><button type="button" className="btn btn-priimary" onClick={props.handleTab}>About Me </li>
	<li class="nav-item" ><button type="button" className="btn btn-priimary" onClick={props.handleTab}>Portfolio </li>
	<li class="nav-item" ><button type="button" className="btn btn-priimary" onClick={props.handleTab}>Contact </li>
	<li class="nav-item" ><button type="button" className="btn btn-priimary" onClick={props.handleTab}>Resume </li>
      </ol>
      </nav>
  );
}

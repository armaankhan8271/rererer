import React from "react";

export default function Header(props) {
  return (
    <div>
      <div className="jumbotron fs-1 display-1 ">
        <h1 className=" display-1">food recipe</h1>
        <div class="input-group w-50 mx-auto">
          <input
            type="text"
            class="form-control width-50"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={props.search}
            onChange={(e)=>props.setsearch(e.target.value)}
          />
          <button className="btn btn-dark mx-auto ">Search</button>
          
        </div>
      </div>
    </div>
  );
}

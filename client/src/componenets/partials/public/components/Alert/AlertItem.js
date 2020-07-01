import React from "react";

function AlertItem({...props}) {
  return <div>
       <div className={`alert alert-${props.className_name} alert-dismissible fade show`} role="alert">
            <h4 className="alert-heading mb-2">{props.title}</h4>
            <p>{props.text}</p>
            <hr />
            <p className="mb-0">{props.desc}</p>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
  </div>;
}

export default AlertItem;
import React from "react";

function AlertItem({...props}) {
  return <div>
       <div class={`alert alert-${props.class_name} alert-dismissible fade show`} role="alert">
            <h4 class="alert-heading mb-2">{props.title}</h4>
            <p>{props.text}</p>
            <hr />
            <p class="mb-0">{props.desc}</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
  </div>;
}

export default AlertItem;
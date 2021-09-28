import * as React from 'react';
import { Link } from "react-router-dom";

export default function SubscriptionsComp(props) {
  return (
    <div>
        <ul>
        {
            props.subscriptions.map((item,index)=>{
             
                return <li key={index}>< Link to={"/menu/subscriptions/"+item._id} >
                {item.name}
              </Link>,{item.date.substring(0,10)}</li>
              
            })
        }
        </ul>
    </div>
  );
}


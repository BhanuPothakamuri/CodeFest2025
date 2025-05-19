import React from "react";
import {jsx as _jsx} from "react/jsx-runtime"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ReactDOM from "react-dom/client";

function AccountValidation(props) {
    const contact = props.contact;
   
    const handleAccountValidationNext = () => {
        console.log('Contact Validation Next Button clicked!');
        // Perform other actions here
        //TODO: Add user selection to Contact State Object
        props.navigate("Lead Entry");
      };

    const handleAccountValidationPrevious = () => {
        console.log('Contact Validation Previous Button clicked!');
        // Perform other actions here
        props.navigate("Account Entry");
      };
      

    return (
      <div className="AccountValidation">
        
          <div>
            <p>Account Validation</p>
          </div>
          <div>
            <span>Name:</span> <span>{props.account.name}</span>
          </div>
          <div>
            <span>Main Phone Number:</span> <span>{props.account.phone}</span>
          </div>
          <div><p>Search Results:</p></div>
          {console.log("Account Match List:")}
          {console.log(props.match_list)}
          {props.match_list.map((item) => (
            <div>
              <div>{item.id} | {item.name} | {item.phone}</div>
              <div>{item.address}</div>
              <div>{item.city}, {item.state} {item.zip}</div>
            </div>     
      ))}
          <button onClick={handleAccountValidationPrevious}>Previous</button>
          <button onClick={handleAccountValidationNext}>Next</button>
      </div>
      
    );
  }
  
  export default AccountValidation;
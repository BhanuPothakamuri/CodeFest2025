import React from "react";
import {jsx as _jsx} from "react/jsx-runtime"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ReactDOM from "react-dom/client";
function ContactValidation(props) {
    const contact = props.contact;
   
    const handleContactValidationNext = () => {
        console.log('Contact Validation Next Button clicked!');
        // Perform other actions here
        //TODO: Add user selection to Contact State Object
        //Check for a selected Contact
        let selected_contact = false;
        props.match_list.map((item) =>{
          if (item.selected){
            selected_contact = true;
          }
        });
        if(selected_contact){
          props.navigate("Account Entry");
        }
        else{
          alert("Select a Contact before navigating to the next page.");
        }
          
        
        
      };

    const handleContactValidationPrevious = () => {
        console.log('Contact Validation Previous Button clicked!');
        // Perform other actions here
        props.navigate("Contact Entry");
      };

      const updateMatchList = (index, selected) => {
        let new_match_list = props.match_list.map((item,i) =>{
          if(selected){
            if(i !== index){
              item.selected = false;
            }
          }
          if (i == index){
            item.selected = selected;
          }
          return item;
        });
        //new_match_list[index].selected = selected;
        console.log(new_match_list);
        props.match_list_update(new_match_list);

      };
      

    return (
      <div className="ContactValidation">
        
          <div>
            <p>Select a Contact</p>
          </div>
          
          {console.log("Contact Match List:")}
          {console.log(props.match_list)}
          {props.match_list.map((item, index) => (
            <div key={"ContactMatch" + index}>
              <div><input type="checkbox" checked={item.selected} onChange={() => updateMatchList(index, !item.selected)}/></div>
              <div>{item.id} | {item.first_name} {item.last_name} | {item.email} | {item.phone}</div>
              <div>{item.address}</div>
              <div>{item.city}, {item.state} {item.zip}</div>
            </div>
        
        
      ))}
          <button onClick={handleContactValidationPrevious}>Previous</button>
          <button onClick={handleContactValidationNext}>Next</button>
          
      </div>
      
    );
  }
  
  export default ContactValidation;
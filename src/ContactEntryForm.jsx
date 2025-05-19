import React from "react";
import {jsx as _jsx} from "react/jsx-runtime"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ReactDOM from "react-dom/client";
function ContactEntry(props) {
    const contact = props.contact;
    const LocalContactList = [
        {
            first_name: "Sean",
            last_name: "Carter",
            phone: "555-123-4567",
            email: "sean@gmail.com",
            address: "123 Main Street",
            city: "Troy",
            state: "New York",
            zip: "12180",
            id: "1-1000"
        },
        {
            first_name: "Sean",
            last_name: "Carter",
            phone: "555-123-4567",
            email: "sean@gmail.com",
            address: "456 Broadway Street",
            city: "Hartford",
            state: "Connecticut",
            zip: "06102",
            id: "1-2000"
        },
        {
            first_name: "Michael",
            last_name: "Jones",
            phone: "555-555-6666",
            email: "Michael@gmail.com",
            address: "456 Main Street",
            city: "Hartford",
            state: "Connecticut",
            zip: "06102",
            id: "1-3000"
        }
    
    ];
    const handleContactEntryNext = () => {
        console.log('Contact Entry Next Button clicked!');
        // Perform other actions here
        //TODO: Query for existing contact.  If a match exists go to Contact Validation else go to account entry
        console.log("Contact Entered:");
        console.log(props.contact);
        console.log(LocalContactList.length);
        console.log(LocalContactList);
        const contactMatchList = [];

        for (var i = 0; i < LocalContactList.length; i++) {
            console.log(i); // index
            console.log(LocalContactList[i].firstName);
            console.log(props.contact.first_name);
            if (LocalContactList[i].first_name === props.contact.first_name &&
                LocalContactList[i].last_name === props.contact.last_name &&
                LocalContactList[i].email === props.contact.email &&
                LocalContactList[i].phone === props.contact.phone
                ){
                console.log("Contact Match!");
                LocalContactList[i].selected = false;
                contactMatchList.push(LocalContactList[i]);
                console.log("Contact Match List");
                console.log(contactMatchList);
            } // value
            else{
                console.log("No Contact Match!");
            }
        }
        let match_count = contactMatchList.length;
        if (match_count < 1){
            //No Matches so Navigate to Account Entry
            props.navigate("Account Entry");
        }
        else if (match_count == 1){
            //One match, update contact data and navigate to Account Entry
            props.contact_update(contactMatchList[0]);
            props.match_list_update(contactMatchList);
            props.navigate("Account Entry");
        }
        else{
            props.match_list_update(contactMatchList);
            props.navigate("Contact Validation");
        }
        
        
      };

      const handleContactDataEntry = (e) => {
        //console.log('First Name Updated!');
        //console.log("e.target object:");
        //console.log(e.target);
        console.log(e.target.title);
        console.log(e.target.value);
        let new_contact = props.contact;
        switch(e.target.title){
            case "First Name":
                new_contact.first_name = e.target.value;
                break;
            case "Last Name":
                new_contact.last_name = e.target.value;
                break;
            case "Phone":
                new_contact.phone = e.target.value;
                break;
            case "Email":
                new_contact.email = e.target.value;
                break;
            default:
                console.log("Error updating contact data");
                break;
        };
        //new_contact.first_name = e.target.value;
        console.log(new_contact);
        props.contact_update(new_contact);
        // Perform other actions here
        //TODO: Query for existing contact.  If a match exists go to Contact Validation else go to account entry
        //props.navigate("Contact Validation");
      };

    const handleCountEntryClick = () => {
        console.log('Contact Entry Link clicked!');
        // Perform other actions here
        props.navigate("Contact Entry");
      };
      const handleAccountClick = () => {
        console.log('AccountEntry Link clicked!');
        // Perform other actions here
        props.navigate("Account Entry");
      };

    return (
      <div className="ContactEntry">
        
          <div>
            <p>Contact Entry</p>
          </div>
          <div>
            <input type="text" placeholder="First Name" title = "First Name" defaultValue={props.contact.first_name} onChange={handleContactDataEntry}/>
          </div>
          <div>
            <input type="text" placeholder="Last Name" title = "Last Name" defaultValue={props.contact.last_name} onChange={handleContactDataEntry}/>
          </div>
          <div>
            <input type="text" placeholder="Phone" title = "Phone" defaultValue={props.contact.phone} onChange={handleContactDataEntry}/>
          </div>
          <div>
            <input type="text" placeholder="Email" title = "Email" defaultValue={props.contact.email} onChange={handleContactDataEntry}/>
          </div>
          <div>
            <button onClick={handleContactEntryNext}>Next</button>
          </div>
          
      </div>
      
    );
  }
  
  export default ContactEntry;
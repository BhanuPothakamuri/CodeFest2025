import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import './App.css';
import React from 'react';
import {jsx as _jsx} from "react/jsx-runtime"
import ContactEntry from "./src/ContactEntryForm.jsx"; 
import Navigation from "./Navigation";
import AccountEntry from "./AccountEntryForm";
import ContactValidation from "./ContactValidationForm";
import AccountValidation from "./AccountValidationForm";
import LeadEntry from "./LeadEntryForm";
import LeadReview from "./LeadReviewForm";

const client = generateClient<Schema>();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        page: 'Contact Entry',
        contact: {
          first_name: '',
          last_name: '',
          phone: '',
          email: ''
        },
        account: {
          name: '',
          phone: ''
        },
        lead: {
          name: '',
          arrival_date: '',
          departure_date: '',
          peak_attendees: '',
          peak_rooms: '',
          property_code: '',
          property_name:'',
          function_agendas: [
            {
              date: '',
              type: '',
              setup_style: '',
              start_time: '',
              end_time: '',
              expected_attendees: ''
          }
        ],
        room_blocks: [
          {
            date: '',
            room_type: '',
            number_of_rooms: '',
            number_of_days: ''
          }
        ]

        },
        contact_match_list: [],
        account_match_list: []
    };
  }

  handleNavigation = (new_page) =>{
    this.setState({page: new_page})
  };

  handleContactUpdate = (updated_contact) =>{
    this.setState({contact: updated_contact})
  };

  handleContactMatchListUpdate = (updated_match_list) =>{
    this.setState({contact_match_list: updated_match_list})
  };

  handleAccountUpdate = (updated_account) =>{
    this.setState({account: updated_account})
  };

  handleAccountMatchListUpdate = (updated_match_list) =>{
    this.setState({account_match_list: updated_match_list})
  };

  handleLeadUpdate = (updated_lead) => {
    this.setState({lead: updated_lead})
  };

    render() {
      console.log(this.state);
      switch(this.state.page){
        case "Contact Entry":
          return (
            <div>
              <ContactEntry contact={this.state.contact} navigate={this.handleNavigation} contact_update={this.handleContactUpdate} match_list_update={this.handleContactMatchListUpdate}/>
              <Navigation page={this.state.page} navigate={this.handleNavigation}/>
            </div>
          );
          break;
        case "Contact Validation":
          return(
            <div>
              <ContactValidation contact={this.state.contact} navigate={this.handleNavigation} match_list={this.state.contact_match_list} match_list_update={this.handleContactMatchListUpdate}/>
              <Navigation page={this.state.page} navigate={this.handleNavigation}/>
            </div>
          );
      
          break;
        case "Account Entry":
          return(
            <div>
              <AccountEntry account={this.state.account} navigate={this.handleNavigation} account_update={this.handleAccountUpdate} match_list_update={this.handleAccountMatchListUpdate}/>
              <Navigation page={this.state.page} navigate={this.handleNavigation}/>
            </div>
          );
          break;
        case "Account Validation":
          console.log("Entered Account Validation Page");
          return(
            <div>
            <AccountValidation account={this.state.account} navigate={this.handleNavigation} match_list={this.state.account_match_list}/>
            <Navigation page={this.state.page} navigate={this.handleNavigation}/>
          </div>
          );
          break;
        case "Lead Entry":
          return(
            <div>
            <LeadEntry 
              navigate={this.handleNavigation}
              lead={this.state.lead}
              update_lead={this.handleLeadUpdate}              
            />
            <Navigation page={this.state.page} navigate={this.handleNavigation}/>
          </div>
          );
          break;
        case "Lead Review":
          return(
            <div>
            <LeadReview 
              navigate={this.handleNavigation} 
              page={this.state.page} 
              contact={this.state.contact} 
              contact_match_list={this.state.contact_match_list} 
              account={this.state.account}
              account_match_list={this.state.account_match_list}
              lead = {this.state.lead}
              
              />
            <Navigation page={this.state.page} navigate={this.handleNavigation}/>
          </div>
          );
          break;
        case "Submission Success":
          return(
            <div>
            <p>Account Validation Work in Progress</p>
            <Navigation page={this.state.page} navigate={this.handleNavigation}/>
          </div>
          );
          break;
        default:
          break;
      }      
    }

}

export default App;
import React from "react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import ReactDOM from "react-dom/client";
function Navigation(props) {
    const handleClick = () => {
      console.log('Button clicked!');
      // Perform other actions here
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
      <div>
        <div>
          <a href="#" onClick={handleCountEntryClick}>
            Contact Entry
          </a>
        </div>
        
        <div>
          <a href="#" onClick={handleClick}>
            Contact Validation
          </a>
        </div>

        <div>
          <a href="#" onClick={handleAccountClick}>
            Account Entry
          </a>
        </div>

        <div>
          <a href="#" onClick={handleClick}>
            Lead Entry
          </a>
        </div>

        <div>
          <a href="#" onClick={handleClick}>
            Review Details
          </a>
        </div>
      
    </div>
    );
  }

  export default Navigation;
function LeadReview(props) {
    const contact = props.contact;
   
    const handleLeadReviewPrevious = () => {
        console.log('Lead Review Previous Button clicked!');
        // Perform other actions here
        //TODO: Add user selection to Contact State Object
        props.navigate("Lead Entry");
      };

    const handleLeadReviewSubmit = () => {
        console.log('Lead Review Submit Button clicked!');
        // Perform other actions here
        // TODO: Write Lead Submission message to console
        // TODO: Reset object and navigate back to start page
        //props.navigate("Contact Entry");
        const final_object = {};
        final_object.contact = props.contact;
        final_object.account = props.account;
        final_object.lead = props.lead;
        console.log(JSON.stringify(final_object, null,2));
      };

      const contactCard = () =>{
        let contact_card_object = {};
        if (props.contact_match_list.length < 1){
          contact_card_object = props.contact;
        }
        else{
          props.contact_match_list.map((item,i) => {
            if(item.selected){
              contact_card_object = item;
            }
          });
        }

        return(
          <div>
            <div>Contact</div>
            <div>{contact_card_object.first_name} {contact_card_object.last_name}</div>
            {contact_card_object.address && contact_card_object.city && contact_card_object.state && contact_card_object.zip ? 
            <div>
              <div>{contact_card_object.address}</div>
              <div>{contact_card_object.city}, {contact_card_object.state}</div>
              <div>{contact_card_object.zip}</div>
            </div> : ""}
            <div>{contact_card_object.phone}</div>
            <div>{contact_card_object.email}</div>
          </div>
        );

      };
      

    return (
      <div className="Lead Review">
        {contactCard()}          
          <div>
            <p>Account</p>
          </div>
          <div>
            <span>Name:</span> <span>Name</span>
          </div>
          <div>
            <span>Phone:</span> <span>test phone</span>
          </div>
          <div>
            <p>Lead</p>
          </div>
          <div>
            <p>Function Agenda</p>
          </div>
          <div><p>Search Results:</p></div>
          <button onClick={handleLeadReviewPrevious}>Previous</button>
          <button onClick={handleLeadReviewSubmit}>Submit</button>
          
      </div>
      
    );
  }
  
  export default LeadReview;
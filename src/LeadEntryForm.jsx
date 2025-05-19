function LeadEntry(props) {
    //const contact = props.contact;
    const lead = props.lead;
   
    const handleLeadEntryPrevious = () => {
      console.log('Lead Entry Previous Button clicked!');
      // Perform other actions here
      //TODO: Query for existing contact.  If a match exists go to Contact Validation else go to account entry
      props.navigate("Account Validation");
    };

    const handleLeadEntryNext = () => {
        console.log('Lead Entry Next Button clicked!');
        // Perform other actions here
        //TODO: Query for existing contact.  If a match exists go to Contact Validation else go to account entry
        props.navigate("Lead Review");
      };

      const handleLeadDataEntry = (e) => {
        //console.log('First Name Updated!');
        //console.log("e.target object:");
        //console.log(e.target);
        console.log(e.target.title);
        console.log(e.target.value);
        let new_lead = lead;
        switch(e.target.title){
            case "Event Name":
                new_lead.name = e.target.value;
                break;
            case "Arrival Date":
                new_lead.arrival_date = e.target.value;
                break;
            case "Departure Date":
                new_lead.departure_date = e.target.value;
                break;
            case "Peak Attendees":
                new_lead.peak_attendees = e.target.value;
                break;
            case "Peak Rooms":
                new_lead.peak_rooms = e.target.value;
                break;
              case "Property Code":
                new_lead.property_code = e.target.value;
                break;
            default:
                console.log("Error updating lead data");
                break;
        };
        //new_contact.first_name = e.target.value;
        console.log("Updated Lead")
        console.log(new_lead);
        props.update_lead(new_lead);
        // Perform other actions here
        //TODO: Query for existing contact.  If a match exists go to Contact Validation else go to account entry
        //props.navigate("Contact Validation");
      };

      const handleFunctionAgendaDataEntry = (e, index) =>{
         //const index = e.target.index;
         const new_lead = props.lead;
         console.log("Function Agenda Value Entered:");
         console.log(e.target.value);
         console.log("Target Object:");
         console.log(e.target);
         console.log(index);
        
         switch(e.target.id){
          case "Date":
              new_lead.function_agendas[index].date = e.target.value;
              break;
          case "Function Type":
            new_lead.function_agendas[index].type = e.target.value;
              break;
          case "StartTime":
            new_lead.function_agendas[index].start_time = e.target.value;
              break;
          case "EndTime":
            new_lead.function_agendas[index].end_time = e.target.value;
              break;
          case "ExpectedAttendees":
            new_lead.function_agendas[index].expected_attendees = e.target.value;
              break;
          case "SetupStyle":
            new_lead.function_agendas[index].setup_style = e.target.value;
          default:
              console.log("Error updating function agenda data");
              break;
      };
      //new_contact.first_name = e.target.value;
      console.log("Updated Lead")
      console.log(new_lead);
      props.update_lead(new_lead);
      };

      const handleAddFunctionAgenda = () =>{
        console.log("Add Function Agenda Button Clicked");
        const new_lead = props.lead;
        new_lead.function_agendas.push({
          date: '',
          type: '',
          setup_style: '',
          start_time: '',
          end_time: '',
          expected_attendees: ''
        });
        console.log(new_lead);
        props.update_lead(new_lead);
      };

      const handleRemoveFunctionAgenda = (e) => {
        console.log("Remove Function Agenda Clicked");
        console.log(e.target.id);
        const new_lead = props.lead;
        new_lead.function_agendas.splice(e.target.id, 1);
        console.log("New Lead after Remove Function Agenda Button Clicked");
        console.log(new_lead);
        props.update_lead(new_lead);
      }

      const handleAddRoomBlock = () =>{
        console.log("Add Room Block Button Clicked")
        const new_lead = props.lead;
        new_lead.room_blocks.push({
            date: '',
            room_type: '',
            number_of_rooms: '',
            number_of_days: ''
        });
        console.log(new_lead);
        props.update_lead(new_lead);
      };

      const handleRemoveRoomBlock = (e) => {
        console.log("Remove Room Block Clicked");
        console.log(e.target.id);
        const new_lead = props.lead;
        new_lead.room_blocks.splice(e.target.id, 1);
        console.log("New Lead after Remove Function Room Block Button Clicked");
        console.log(new_lead);
        props.update_lead(new_lead);
      }

    return (
      <div className="LeadEntry">
        
          <div>
            <p>Lead Entry</p>
          </div>
          <div>
            <label htmlFor="EventName">Event Name</label>
            <input type="text" label="Event Name" placeholder="Event Name" title = "Event Name" id ="EventName" defaultValue={props.lead.name} onChange={handleLeadDataEntry}/>
          </div>
          <div>
          <label htmlFor="ArrivalDate">Arrival Date</label>
            <input type="date" label="Arrival Date" placeholder="Arrival Date" title = "Arrival Date" id ="ArrivalDate" defaultValue={props.lead.arrival_date} onChange={handleLeadDataEntry}/>
          </div>
          <div>
          <label htmlFor="DepartureDate">Departure Date</label>
            <input type="date" label="Departure Date" placeholder="Departure Date" title = "Departure Date" id ="DepartureDate" defaultValue={props.lead.departure_date} onChange={handleLeadDataEntry}/>
          </div>
          <div>
          <label htmlFor="PeakAttendees">Peak Attendees</label>
            <input type="number" label="Peak Attendees" placeholder="Peak Attendees" title = "Peak Attendees" id ="PeakAttendees" defaultValue={props.lead.peak_attendees} onChange={handleLeadDataEntry}/>
          </div>
          <div>
          <label htmlFor="PeakRooms">Peak Rooms</label>
            <input type="number" label="Peak Rooms" placeholder="Peak Rooms" title = "Peak Rooms" id ="PeakRooms" defaultValue={props.lead.peak_rooms} onChange={handleLeadDataEntry}/>
          </div>
          <div>
          <label htmlFor="PropertyCode">Property Code</label>
            <input type="text" label="Property Code" placeholder="Property Code" title = "Property Code" id ="PropertyCode" defaultValue={props.lead.property_code} onChange={handleLeadDataEntry}/>
          </div>
          <p>Function Agenda:</p>
          <span><button onClick={handleAddFunctionAgenda}>Add</button></span>
          {props.lead.function_agendas.map((item, index) => {
            return(
            <div key={"FunctionAgendas" + index}>
              <span>
                <label htmlFor="Date">Date</label><input type="date" id="Date" index={index} placeholder="Date" defaultValue={item.date} onChange={ (event) =>handleFunctionAgendaDataEntry(event, index)}/>
                <label htmlFor="FunctionType">Function Type</label><input type="text" id="Function Type" index={index} placeholder="Function Type" defaultValue={item.type} onChange={ (event) =>handleFunctionAgendaDataEntry(event, index)}/>
                <label htmlFor="StartTime">Start Time</label><input type="time" id="StartTime" index={index} placeholder="Start Time" defaultValue={item.start_time} onChange={ (event) =>handleFunctionAgendaDataEntry(event, index)}/>
                <label htmlFor="EndTime">End Time</label><input type="time" id="EndTime" index={index} placeholder="End Time" defaultValue={item.end_time} onChange={ (event) =>handleFunctionAgendaDataEntry(event, index)}/>
                <label htmlFor="SetupStyle">Setup Style</label><input type="text" id="SetupStyle" index={index} placeholder="SetupStyle" defaultValue={item.setup_style} onChange={ (event) =>handleFunctionAgendaDataEntry(event, index)}/>
                <label htmlFor="ExpectedAttendees">Expected Attendees</label><input type="text" id="ExpectedAttendees" index={index} placeholder="Expected Attendees" defaultValue={item.expected_attendees} onChange={ (event) =>handleFunctionAgendaDataEntry(event, index)}/>
                <button onClick={handleRemoveFunctionAgenda} id={index}>Remove</button>
              </span>
          </div>
            );
            
          })}
          
        <p>Room Blocks:</p>
        <span><button onClick={handleAddRoomBlock}>Add</button></span>
        {props.lead.room_blocks.map((item, index)=>{
          return(
        <div>
          <span>
            <label htmlFor="RoomBlockDate">Date</label><input type="date" id="RoomBlockDate" placeholder="Date"/>
            <label htmlFor="RoomType">Room Type</label><input type="text" id="Function Type" placeholder="Function Type"/>
            <label htmlFor="NumberOfRooms">Number of Rooms</label><input type="text" id="NumberOfRooms" placeholder="Number of Rooms"/>
            <label htmlFor="NumberOfDays">Number of Days</label><input type="text" id="NumberOfDays" placeholder="Number of Days"/>
            <button onClick={handleRemoveRoomBlock} id={index}>Remove</button>
          </span>
        </div>   
          );
        })}
          
          <div>
            <span>
              <button onClick={handleLeadEntryPrevious}>Previous</button>
              <button onClick={handleLeadEntryNext}>Next</button>
            </span>
          </div>
          
      </div>
      
    );
  }
  
  export default LeadEntry;
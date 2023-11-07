import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './week.css';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import img from "./assets/pap.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';



const week = [
  { id: 1, day: 'Monday', notes: [] },
  { id: 2, day: 'Tuesday', notes: [] },
  { id: 3, day: 'Wednesday', notes: [] },
  { id: 4, day: 'Thursday', notes: [] },
  { id: 5, day: 'Friday', notes: [] },
  { id: 6, day: 'Saturday', notes: [] },
  { id: 7, day: 'Sunday', notes: [] },
  { id: 8, day: 'Notes', notes: [] }
];







const Weekly = () => {
  const [task, Settask] = useState("");
  const [time, Settime] = useState("");
  const [plan, Setplan] = useState([]);
  const [box, Setbox] = useState(false);

  


  const handlebox = (it)=>{
    console.log(it)
  }
   
  
  
  const handleChange = ({day}) => {
    

    const note = {
      id: day.notes.length+1,
      task: task,
      time: time,
      done: true,
    };
 
  
    // Update the 'plan' state to include the new note
    day.notes = [...day.notes, note];
    Setplan(day.notes);
  
   Settime("");
   Settask("")
  };
  const handleNoteRemove = (day, noteIndex) => {
    // Remove the note at the given index from 'day.notes'
    day.notes.splice(noteIndex, 1);
    // Update 'plan' to match 'day.notes'
    Setplan([...day.notes]);
  };
       
    
    
    
  return (
    <Container id="cover">
      <img id="img1" src={img} alt="" />
      <img id="img2" src={img} alt="" />
      <img id="img3" src={img} alt="" />
      <img id="img4" src={img} alt="" />

      <h1 id="head">
        Weekly <br />
        Planner
      </h1>
      <Row id="ro">
        {week.map((day) => (
          <Col className="car" id="we" lg={3} md={4} sm={12} key={day.id}>
            {" "}
            <h1>{day.day}</h1>
            {day.notes.map((item, index) => (
              <div className='contet' key={index}>
                <input id='check' type="checkbox" value={false}
                    onChange={(e) => Setbox(e.target.value)} onClick={()=>handlebox(item.done)} />
                <div><p className={item.done ? 'checked' : ''}                   >
                  {item.task} - {item.time}
                </p></div>
                
                <button id='ico' onClick={() => handleNoteRemove(day, index)}>
                <FontAwesomeIcon  icon={faCircleXmark} fade style={{color: "#be9a5e",}} />
                </button>
              </div>
            ))}
            <div className="inside-pop">
              <Popup
                trigger={<button id="but">+</button>}
                position="top center"
              >
                <div id="pop">
                  <p>Task</p>
                  <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={(e) => Settask(e.target.value)}
                  />
                  <p>Time</p>
                  <input
                    type="text"
                    name="time"
                    value={time}
                    onChange={(e) => Settime(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      handleChange({ day });
                    }}
                  >
                    {" "}
                    Add
                  </button>
                </div>
              </Popup>
            </div>
            <Container></Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Weekly;

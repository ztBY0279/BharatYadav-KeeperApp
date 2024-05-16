import  { useState } from "react";
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const useStateValue = useState(1);
  console.log('the useStatevaleu variable is ',useStateValue);
  // outpus is the useStatevaleu variable is  Array(2)
  console.log('the value of useState is ',useState(""));
  const [rows,setRows] = useState(1);
  const [check,setCheck] = useState(true);

  function handleClick(){
    setCheck(false);
    setRows(3);
  }
  function removeIcon(){
    setCheck(true);
    setRows(1);
  }

  function handleChange(event) {
   
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
// here we are doing the conditional redering we can also do that using &&
  return (
    <div>
      <form className="create-note">
        {
            (check)?(
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rows}
        />
        

        
        ):
        <>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rows}
        />
        <Zoom in={true}>
        <Fab onClick={submitNote}>
        <AddIcon onClick = {removeIcon} /> 
        </Fab>
        </Zoom>
        </>
        }
      </form> 
    </div>
  );
}
CreateArea.propTypes = {
    onAdd:PropTypes.func
};
export default CreateArea;

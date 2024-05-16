import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}> <DeleteIcon/> </button>
    </div>
  );
}

Note.propTypes = {
    onDelete:PropTypes.func,
    title:PropTypes.string,
    content:PropTypes.string,
    id:PropTypes.number
};

export default Note;
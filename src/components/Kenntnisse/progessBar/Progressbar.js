import ProgressBar from "react-bootstrap/ProgressBar";

function BasicExample(props) {
  return <ProgressBar variant="info" now={props.value} />;
}

export default BasicExample;

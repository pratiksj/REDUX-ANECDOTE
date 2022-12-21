import { connect } from "react-redux";
//import { useSelector } from "react-redux";

const Notification = (props) => {
  //const notification = useSelector((state) => state.notification);
  // console.log("hellow", notification);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  if (props.notification === null) {
    return null;
  }
  return <div style={style}>{props.notification}</div>;
};
const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  };
};

const ConnectedNotes = connect(mapStateToProps)(Notification);
export default ConnectedNotes;

import ReactBSAlert from "react-bootstrap-sweetalert";

function SweetAlert({ onConfirm, onCancel, message, type, title, ...props }) {
  console.log("cccccc", type);
  return (
    <ReactBSAlert
      // style={{ display: "block", marginTop: "-100px" }}
      title={title || "Gagal"}
      onConfirm={onConfirm}
      onCancel={onCancel}
      // confirmBtnBsStyle={type || "error"}
      confirmBtnText="Ok"
      btnSize=""
      {...props}
    >
      {message}
    </ReactBSAlert>
  );
}

export default SweetAlert;

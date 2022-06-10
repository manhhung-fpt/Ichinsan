/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Button } from "reactstrap";

// core components
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

function ImageUpload(props) {
  const [fileState, setFileState] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );
  const fileInput = React.useRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFileState(file);
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    // fileState is the file/image uploaded
    // in this function you can save the image (fileState) on form submit
    // you have to call it yourself
  };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    fileInput.current.value = null;
    setFileState(null);
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
  };
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div className={"thumbnail" + (props.avatar ? " img-circle" : "")}>
        <img src={imagePreviewUrl} alt="..." />
      </div>
      <div>
        {fileState === null ? (
          <Button className="btn-round" onClick={() => handleClick()}>
            {props.avatar ? "Add Photo" : "Select image"}
          </Button>
        ) : (
          <span>
            <Button className="btn-round" onClick={() => handleClick()}>
              Change
            </Button>
            {props.avatar ? <br /> : null}
            <Button
              color="danger"
              className="btn-round"
              onClick={() => handleRemove()}
            >
              <i className="fa fa-times" />
              Remove
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
};

export default ImageUpload;

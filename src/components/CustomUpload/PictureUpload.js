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

import defaultImage from "assets/img/default-avatar.png";

function PictureUpload(props) {
  // eslint-disable-next-line
  const [fileState, setFileState] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(defaultImage);
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
  return (
    <div className="picture-container">
      <div className="picture">
        <img src={imagePreviewUrl} className="picture-src" alt="..." />
        <input type="file" onChange={(e) => handleImageChange(e)} />
      </div>
      <h6 className="description">Choose Picture</h6>
    </div>
  );
}

export default PictureUpload;

/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import React from 'react';
import fetch from 'isomorphic-fetch';

const uploadImage = (data) => {
  return fetch('/files', {
    method: 'POST',
    body: data,
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Upload image failed');
  });
};

const patchImageName = (targetId, imageName) => {
  return fetch(`/api/targets/${targetId}`, {
    method: 'PATCH',
    headers: new window.Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      image_name: imageName,
    }),
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Patch image name failed');
  });
};

export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      status: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = new window.FormData();
    const targetId = 1;

    data.append('file', this.state.file);
    data.append('name', this.state.file.name);

    // uploadImage(data)
    // .then(responseData => patchImageName(targetId, responseData.image_name))
    // .catch((err) => {
    //   console.log(err);
    // });

    patchImageName(targetId, 'asdasd')
    .catch((err) => {
      console.log(err);
    });
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new window.FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >

          <input
            type="file"
            onChange={this.handleImageChange}
          />

          <button type="submit">Upload</button>

          <div>
            <img
              src={this.state.imagePreviewUrl}
              alt="preview"
              width="200"
            />

            <img
              src="/uploads/vintagebridge2560x1440wallpaper4201.jpg"
              width="400"
            />
          </div>

        </form>
      </div>
    );
  }
}


export default ImageUpload;

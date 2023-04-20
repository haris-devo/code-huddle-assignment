import React, { useEffect, useState } from "react";

const VideosComp = () => {
  // Set up state to hold the list of videos
  const [videos, setVideos] = useState([
    { url: "../videos/sampleVideo.mp4", name: "First" },
    { url: "../videos/sampleVideo.mp4", name: "Hello" },
    { url: "../videos/sampleVideo.mp4", name: "Hello" },
    { url: "../videos/sampleVideo.mp4", name: "Hello" },
    { url: "../videos/sampleVideo.mp4", name: "Hello" }
  ]);

  function setupVideo() {
    var v = document.getElementById("videoElement");
    if (v) {
      v.addEventListener(
        "mouseover",
        function () {
          this.controls = true;
        },
        false
      );
      v.addEventListener(
        "mouseout",
        function () {
          this.controls = false;
        },
        false
      );
    }
  }

  useEffect(() => {
    setupVideo();
  }, []);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const name = file.name;
      const videoExists = videos.some((video) => video.name === name);
      if (videoExists) {
        alert("A video with this name already exists. Please rename your video and try again.");
      } else {
        const newVideos = [...videos, { url, name }];
        setVideos(newVideos);
      }
    }
  }

  window.addEventListener("load", setupVideo, false);

  return (
    <div>
      <div className="videos_area mx-4">
        <div className="overview-boxes">
          {videos.map((video, index) => (
            <div className="video_box box d-flex flex-column" key={index}>
              <div className="video_icon d-flex align-items-center mb-1 ">
                <i className="bx bx-video"></i>
                <p className="ml-4">{video.name}</p>
              </div>
              <div className="">
                <div className="right-side">
                  <video controls>
                    <source src={video.url} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          ))}
          <div className="video_box box d-flex flex-column">
            <div className="video_icon d-flex align-items-center mb-1 ">
              <i className='bx bxs-file-plus' style={{color:'#ffffff'}}  ></i>
              <p className="ml-4">Choose Video</p>
            </div>
            <div className="">
              <div className="right-side">
                <div className="chose_div">
                  <label htmlFor="files" className="btn">
                    Select Video
                  </label>
                  <input
                    id="files"
                    style={{ visibility: "hidden" }}
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VideosComp;

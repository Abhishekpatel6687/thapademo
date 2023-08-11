import React from "react";
import "./Photo.css";
const Gallery = () => {
  return (
    <>
      <input type="radio" name="Photos" id="check1" checked />
      <input type="radio" name="Photos" id="check2" />
      <input type="radio" name="Photos" id="check3" />
      <input type="radio" name="Photos" id="check4" />
      <input type="radio" name="Photos" id="check5" />

      <div class="container">
        <h1>OUR PHOTOS GALLERY</h1>

        <div class="top-content">
          <h3>Photo Gallery</h3>
          <label for="check1">All Photos</label>
          <label for="check2">My Photos</label>
          <label for="check3">Nature Photos</label>
          <label for="check4">Flower Photos</label>
          <label for="check5">River Photos</label>
        </div>

        <div class="photo-gallery">
          <div class="pic my">
            <img src="my/1.jpg" />
          </div>
          <div class="pic nature">
            <img src="nature/11.jpg" />
          </div>
          <div class="pic flower">
            <img src="flower/aa.jpg" alt="" />
          </div>

          <div class="pic my">
            <img src="my/2.jpg" />
          </div>
          <div class="pic nature">
            <img src="nature/22.jpg" />
          </div>
          <div class="pic flower">
            <img src="flower/dd.jpg" alt="" />
          </div>

          <div class="pic my">
            <img src="my/3.jpg" />
          </div>
          <div class="pic nature">
            <img src="nature/33.jpg" />
          </div>

          <div class="pic flower">
            <img src="flower/ff.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

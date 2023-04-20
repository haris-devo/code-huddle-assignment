import React from 'react'
import MapComp from './MapComp'

const HomeContent = () => {
  return (
    <div>
        <MapComp />
        <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9aznnTS82gY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <i class='bx bx-cart-alt cart'></i> */}
            </div>
            <div class="box">
              <div class="right-side">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9aznnTS82gY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <i class='bx bx-cart-alt cart'></i> */}
            </div>
            <div class="box">
              <div class="right-side">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9aznnTS82gY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <i class='bx bx-cart-alt cart'></i> */}
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Return</div>
                <div class="number">11,086</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
              <i class="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div class="sales-boxes"></div>
    </div>
  )
}

export default HomeContent
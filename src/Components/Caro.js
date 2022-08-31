import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from './styles/caro.module.css'

function Caro() {
    const arr = {
        img3: "https://img.freepik.com/free-vector/gradient-kids-toys-twitch-banner_23-2149596841.jpg?w=2000",
        img2: "https://pyxis.nymag.com/v1/imgs/df4/c71/c7f62f960f79a3b3cfa37567733cf2ffb5-toys-that-sell-out.jpg",
        img1: "https://cdn2.f-cdn.com/contestentries/1678827/26574570/5de1301725daf_thumb900.jpg",
      };
  return (
    <Carousel autoPlay={true} showThumbs={false} showIndicators={false} infiniteLoop={true}>
    <div className={classes.cardiv1}>
      <img src={arr.img1} alt="" style={{ height: "65vh"}} />
      {/* <button className={classes.crdnow1}>Order Now</button> */}
    </div>
    <div className={classes.cardiv2}>
      <img src={arr.img2} alt="" style={{ height: "65vh" }} />
      {/* <button className={classes.crdnow2}>Order Now</button> */}
    </div>
    <div className={classes.cardiv3}>
      <img src={arr.img3} alt="" style={{ height: "65vh" }} />
      {/* <button className={classes.crdnow3}>Order Now</button> */}
    </div>
    
  </Carousel>
  );
}

export default Caro;

import { Alert, Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Storage } from "./Storage";
import classes from "./styles/Products.module.css";
import data from './Data'
import { Slider } from "@mui/material";

function Products() {
  const details = useContext(Storage);
  const nav = useNavigate()
  const [value, setValue] = useState([500, 2000]);

  const handleChange = (event, newValue) => {
    // console.log(newValue)
    setValue(newValue);
    var arr = document.querySelectorAll('input[type=radio]')
      var vlt ;
      for(let i=0;i<arr.length;i++){
        if(arr[i].checked)
        vlt = i
      }
      details.range(newValue,vlt)
  };
  const [alert,setAlert] = useState(false)
  const [modal, setModal] = useState(false);
  const [modalItem,setModalItem] = useState([])
  const explore = (val) => {
    // console.log(val)
    setModalItem([val])
    setModal(true);
  };
  return (
    <>
      <div className={classes.products}>
        <div className={classes.filter}>
          <h1>Filters</h1>
          <p>
            <input type="radio" id="ride" 
            name="a"
            onClick={details.riding} 
            />
            <label htmlFor="ride">Riding Toys</label>
          </p>
          <p>
            <input
              type="radio"
              id="art"
              name="a"
              onClick={details.art}
            />
            <label htmlFor="art">Arts Toys</label>
          </p>
          <p>
            <input
              type="radio"
              id="puzzle"
              name="a"

              onClick={details.puzzle}
            />
            <label htmlFor="puzzle">PuZZle toys</label>
          </p>
          <p>
            <input
              type="radio"
              id="doll"
              name="a"
              onClick={details.doll}
            />
            <label htmlFor="doll">Dolls</label>
          </p>
          <p>
            <input
              type="radio"
              id="other"
              name="a"
              onClick={details.other}
            />
            <label htmlFor="other">Other</label>
          </p>
          {/* <input
            className={classes.search}
            placeholder="search"
            // onChange={details.searchHandler}
            id="search"
          /> */}
          <h1>Price</h1>
          {/* <input type={'radio'}/><label>Low to High</label><br />
          <input type={'radio'}/><label>High to Low</label> */}
          <Slider sx={{width:'10rem'}}
          step={200}
          min={500}
          max={2000}
          value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
            ></Slider>
        </div>
        <div className={classes.productsarea}>
          {details.print.length===0 && <h1>Serch for another item</h1>}
          {details.print.map((item) => (
            <div className={classes.productcard}>
              <img src={item.img} alt="" />
              <hr />
              <div>
                <span>{item.name.toUpperCase()}</span>
                <span>&#8377;{item.price}</span>
                {/* <p>
                  {item.gender} | {item.type}
                </p> */}
                <button onClick={() => explore(item)}>Explore Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className={classes.modal}>
          {modalItem.map((item) => (
            <div className={classes.content}>
              <div
                className={classes.closemodal}
                onClick={() => {
                  setAlert(false)
                  setModal(false)}}
              >
                &times;
              </div>
              <img
                src={item.img}
                alt=""
              />
              <div className={classes.textcontent}>
                <p>{item.id}</p>
                <h4>{item.name}</h4>
                <br />
                <h4>&#8377;{item.price}</h4>
                <br />
                <Alert severity= {alert? 'success':''}>
                  {alert &&  <span>Added to cart</span>}
                </Alert>
                <button onClick={() => {
                  setAlert(true)
                  details.addToCartHandler(item)}}>
                  add to cart
                </button>
                <button 
                onClick={()=>nav('/cart')}
                >Go to cart</button>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default Products;
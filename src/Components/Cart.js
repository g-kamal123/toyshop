import { Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Storage } from "./Storage";
import classes from "./styles/Cart.module.css";

function Cart() {
  const [delmodal,setDelmodal] = useState(false)
  const [todel,settodel] = useState('')
  const [modalchk,setModalchk] = useState(false)
  const [err,setErr] = useState('')
  const nav = useNavigate()
  const details = useContext(Storage);
  const checkOut = ()=>{
    if(details.user){
    setModalchk(true)
    setErr('')
    details.checkoutHandler()
    }
    else setErr('Login First')
    // details.checkoutHandler()
  }
  const sum = details.cartarr.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  return (
    <>
    <div className={classes.cart}>
      <div className={classes.order}>
        {details.cartarr.map((item) => (
          <div className={classes.cartItems} key={item.id}>
            <img src={item.img} alt="" />
            <div className={classes.textcontent}>
              <h4>{item.name}</h4>
              {/* <span>{item}</span> */}
              <h2>&#8377;{item.price}</h2>
            </div>
            <div className={classes.buttoncontent}>
              <p>
                <button 
                onClick={() => details.decrementHandler(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                onClick={() => details.incrementHandler(item)}
                >
                  +
                </button>
              </p>
              <i
                className="fa-solid fa-trash-can"
                onClick={() => {
                  settodel(item)
                  setDelmodal(true)
                  }}
              ></i>
            </div>
          </div>
        ))}
      </div>
      {details.cartarr.length>0 ? (
          <div className={classes.ordersummary}>
            <h2>Order Summary</h2>
            <p>
              <span>Sub Total</span>
              <span>&#8377;{sum}</span>
            </p>
            <p>
              <span>Delivery</span>
              <span>Free</span>
            </p>
            <p>
              <span>Total(inclv.)</span>
              <span>&#8377;{sum}</span>
            </p>
            <button onClick={checkOut}>Place Order</button>
            <span style={{color:'red'}}>{err}</span>
          </div>
        ) : (
          <div className={classes.emptyCart}>
            <h1>Your cart is empty</h1>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNzggMTc4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNzggMTc4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDY2NDc5MjYyNDgwOTc0NTc0MTQwMDAwMDE0NTcwNjE5NTMxNDA0OTQ1MDM4Xyk7fQoJLnN0MXtvcGFjaXR5OjUuMjAwMDAwZS0wMjtmaWxsOiM4MzI3Mjk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Qye2ZpbGw6IzkwOEU4QTt9Cgkuc3Qze2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGRlZnM+CgkJPHJlY3QgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTc4IiBoZWlnaHQ9IjE3OCIvPgoJPC9kZWZzPgoJPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDE3ODg5MzcyNTQzODU4Mjc0MjQwMDAwMDAwMDExMzcxNTY4MzkwNDI0NTE3MF8iPgoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+Cgk8L2NsaXBQYXRoPgoJPGcgaWQ9IkJhZ19JY29uIiBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzg4OTM3MjU0Mzg1ODI3NDI0MDAwMDAwMDAxMTM3MTU2ODM5MDQyNDUxNzBfKTsiPgoJCTxnIGlkPSJHcm91cF8xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcxIC0zMTgpIj4KCQkJPGNpcmNsZSBpZD0iRWxsaXBzZV83IiBjbGFzcz0ic3QxIiBjeD0iOTYwLjUiIGN5PSI0MDcuNSIgcj0iODcuNSIvPgoJCQk8ZyBpZD0ibm91bi1zaG9wLWJhZy0zMDAyMDQwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NTkuMDc0IDMxNC4zMikiPgoJCQkJPHBhdGggaWQ9IlBhdGhfMzI4IiBjbGFzcz0ic3QyIiBkPSJNMTQ3LjYsMTQ2LjFsMjcuOCwxNC45aDAuMmMwLjIsMC4xLDAuMywwLjEsMC41LDAuMWMwLjEsMCwwLjIsMCwwLjMsMGw3Ny44LTE5LjkKCQkJCQljMC43LTAuMiwxLjEtMC44LDEuMS0xLjVsLTguMS04NC44bDAsMGMwLTAuMi0wLjEtMC4zLTAuMS0wLjVjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4zbC0wLjEtMC4xbC0wLjEtMC4xTDIzMiw0NS42CgkJCQkJYy0wLjctMC40LTEuNi0wLjEtMiwwLjZjLTAuNCwwLjctMC4xLDEuNiwwLjUsMmwxMS4xLDYuMkwyMjUsNTguMWMtMS4yLTEyLjEtMy44LTI2LjEtOS4zLTMwLjhjLTEuNi0xLjQtMy44LTItNS45LTEuNgoJCQkJCWMtOS42LDEuNy0xMywyMi40LTE0LjIsMzlsLTE5LjgsNC40bC0xNi40LTEzLjRsMzMuNS03LjVsMCwwYzAuNy0wLjQsMS4xLTEuMywwLjctMmMtMC4yLTAuNS0wLjgtMC44LTEuMy0wLjhsLTEyLjIsMi43CgkJCQkJYzEuMi03LDQuMi0xNi41LDguMy0xNy44YzEuOS0wLjYsNC4zLDAuNyw3LDMuOGwwLDBjMC42LDAuNiwxLjUsMC42LDIuMSwwYzAuNi0wLjUsMC42LTEuNCwwLjEtMmMtMy41LTQuMS02LjktNS43LTEwLjEtNC43CgkJCQkJYy03LjIsMi4xLTEwLDE3LTEwLjYsMjEuNGwtMjEuMiw0LjdjLTAuMSwwLTAuMywwLjEtMC40LDAuMWMtMC4xLDAuMS0wLjMsMC4yLTAuNCwwLjNsLTAuMSwwLjFsMCwwYy0wLjEsMC4xLTAuMiwwLjMtMC4yLDAuNAoJCQkJCWMwLDAuMSwwLDAuMywwLDAuNGMtMC42LDMuMy0yLjMsMTguMS03LjYsODkuNkMxNDYuOSwxNDUuMiwxNDcuMSwxNDUuOCwxNDcuNiwxNDYuMUwxNDcuNiwxNDYuMXogTTIxMC4zLDI4LjZMMjEwLjMsMjguNgoJCQkJCWMxLjItMC4yLDIuNSwwLjEsMy40LDFjNC43LDMuOSw3LjEsMTcsOC4zLDI5LjJMMTk4LjYsNjRDMTk5LjksNDcuOCwyMDMuMSwyOS45LDIxMC4zLDI4LjZMMjEwLjMsMjguNnogTTE5NC45LDg0LjkKCQkJCQljMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNWMwLTQuNCwwLTEwLjgsMC41LTE3LjhsMjMuOS01LjRjMC41LDYuNCwwLjcsMTIuMywwLjcsMTYuMWwwLDBjMCwwLjgsMC43LDEuNSwxLjUsMS41CgkJCQkJczEuNS0wLjcsMS41LTEuNWMwLTAuNywwLTcuOS0wLjctMTYuN2wxOS4yLTQuM2w3LjksODEuOWwtNzQuNywxOS4ybC0wLjgtODUuOWwxOC40LTQuMUMxOTQuOCw3Ni4yLDE5NC44LDgzLDE5NC45LDg0LjkKCQkJCQlMMTk0LjksODQuOXogTTE1Nyw1Ny43bDE2LjksMTMuN2wwLjgsODUuOGwtMjQuOC0xMy4zQzE1Mi4yLDExMywxNTUuNyw2OC4zLDE1Nyw1Ny43TDE1Nyw1Ny43eiIvPgoJCQkJPHBhdGggaWQ9IkxpbmVfMjQzIiBjbGFzcz0ic3QyIiBkPSJNMjA0LjYsMTI0LjdjLTAuNywwLTEuMy0wLjUtMS41LTEuMWMtMC4yLTAuOCwwLjMtMS42LDEuMS0xLjhsMjctN2MwLjgtMC4yLDEuNiwwLjMsMS44LDEuMQoJCQkJCWMwLjIsMC44LTAuMywxLjYtMS4xLDEuOGwtMjcsN0MyMDQuOCwxMjQuNywyMDQuNywxMjQuNywyMDQuNiwxMjQuN3oiLz4KCQkJCTxjaXJjbGUgaWQ9IkVsbGlwc2VfOCIgY2xhc3M9InN0MyIgY3g9IjIwNS4xIiBjeT0iMTA1LjciIHI9IjQiLz4KCQkJCTxwYXRoIGlkPSJFbGxpcHNlXzhfLV9PdXRsaW5lIiBjbGFzcz0ic3QyIiBkPSJNMjA1LjEsMTA0LjdjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFzMS0wLjQsMS0xUzIwNS42LDEwNC43LDIwNS4xLDEwNC43CgkJCQkJIE0yMDUuMSwxMDEuN2MyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNHMtNC0xLjgtNC00UzIwMi45LDEwMS43LDIwNS4xLDEwMS43eiIvPgoJCQkJPGNpcmNsZSBpZD0iRWxsaXBzZV85IiBjbGFzcz0ic3QzIiBjeD0iMjIzLjEiIGN5PSIxMDEuNyIgcj0iNCIvPgoJCQkJPHBhdGggaWQ9IkVsbGlwc2VfOV8tX091dGxpbmUiIGNsYXNzPSJzdDIiIGQ9Ik0yMjMuMSwxMDAuN2MtMC42LDAtMSwwLjQtMSwxczAuNCwxLDEsMXMxLTAuNCwxLTFTMjIzLjYsMTAwLjcsMjIzLjEsMTAwLjcKCQkJCQkgTTIyMy4xLDk3LjdjMi4yLDAsNCwxLjgsNCw0cy0xLjgsNC00LDRzLTQtMS44LTQtNFMyMjAuOSw5Ny43LDIyMy4xLDk3Ljd6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==" alt=""/>
            <button onClick={()=>nav('/store')}>Continue Shopping</button>
          </div>
        )}
    </div>
    <Modal open={modalchk} onClose={()=>setModalchk(false)}>
      <div className={`${classes.emptyCart} ${classes.chkmodal}`}>
        <h2>Order placed succesfully</h2>
        <button onClick={()=>nav('/store')}>Continue Shopping</button>
      </div>
    </Modal>
    <Modal open={delmodal} onClose={()=>setDelmodal(false)}>
      <div className={`${classes.emptyCart} ${classes.chkmodal}`}>
        <h2>Want to delete this item?</h2>
        <p style={{display:'flex',gap:'2.4rem'}}>
          <button onClick={()=>{
            setDelmodal(false)
            details.deleteCartItem(todel)}}>delete</button>
          <button onClick={()=>setDelmodal(false)}>cancel</button>
        </p>
      </div>
    </Modal>
    </>
  );
}

export default Cart;
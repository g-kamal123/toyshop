import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./styles/Navigation.module.css";
import { Modal } from "@mui/material";
import { Storage } from "./Storage";

function Navigation() {
  const detail = useContext(Storage);
  const [modal, setModal] = useState(false);
  const [logoutmodal,setLogoutModal] = useState(false)
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [reguser, setReguser] = useState("");
  const [regpass, setRegpass] = useState("");
  const [cnfpass, setcnfpass] = useState("");
  const [err, setErr] = useState("");
  const [match, setMatch] = useState("");
  return (
    <div className={classes.navigation}>
      <ul>
        <Link to={"/"} style={{ backgroundColor: "red" }}>
          Home
        </Link>

        <Link to={"/store"} style={{ backgroundColor: "rgb(255, 102, 0)" }}>
          Store{" "}
        </Link>
        <Link to={"/cart"} style={{ backgroundColor: "orange" }}>
          Cart<i className="fa-solid fa-cart-arrow-down"></i>
        </Link>
        {!detail.user && <a href="##"
          style={{ backgroundColor: "rgb(7, 75, 7)" }}
          onClick={() => setModal(true)}
        >
          Login<i className="fa-solid fa-circle-user"></i>
        </a>}
        {detail.user && <a href="##"
        style={{ backgroundColor: "rgb(7, 75, 7)" }}
        onClick={()=>setLogoutModal(true)}>Logout {detail.user}</a>}
        
      </ul>
      <Modal open={modal} onClose={() => setModal(false)}>
        <div
          className={classes.forms}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "2vw",
            backgroundColor: "whitesmoke",
            width: "20rem",
            border: "1.5px solid black",
            borderRadius: "15px",
          }}
        >
          <div className={classes.log}>
            <span
              id="lg"
              style={{ backgroundColor: `${login ? "orange" : "whitesmoke"}` }}
              onClick={(event) => {
                setLogin(true);
                setErr('')
                setMatch('')
              }}
            >
              Login
            </span>
            <span
              id="sg"
              style={{ backgroundColor: `${!login ? "orange" : "whitesmoke"}` }}
              onClick={(event) => {
                setLogin(false);
                setErr('')
                setMatch('')
              }}
            >
              Sign Up
            </span>
          </div>
          <span style={{
                  color: `${err === "Registered successfully" ? "green" : "red"}`,
                }}>{err}</span>
          {login && (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "4%",
              }}
              onSubmit={(event) => {
                event.preventDefault();
                console.log(regpass)
                if(user=== detail.user1 && pass === detail.pass1){
                detail.login(user);
                setPass('')
                setUser('')
                setModal(false)
                }
                else {
                  setErr("username and password not matched")
                  return
                }
                
              }}
            >
              <input
                required
                placeholder="username"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setUser(event.target.value)}
              />
              <input
                required
                type={"password"}
                placeholder="password"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setPass(event.target.value)}
              />
              <button
                type="submit"
                style={{
                  width: "fit-content",
                  padding: "1%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </form>
          )}

          {!login && (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                paddingTop: "4%",
              }}
              onSubmit={(event) => {
                event.preventDefault();
                if (regpass !== cnfpass) {
                  return;
                }
                detail.register(reguser,regpass)
                setMatch('')
                setErr('Registered successfully')
                setReguser('')
                setRegpass('')
                setcnfpass('')
              }}
            >
              <input
              value={reguser}
                required
                placeholder="username"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setReguser(event.target.value)}
              />
              <input placeholder="541 st. strret lane 12" required
              style={{ fontSize: "1.2rem", padding: "2%" }}/>
              <input
              value={regpass}
                required
                type={"password"}
                placeholder="password"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => setRegpass(event.target.value)}
              />
              <input
              value={cnfpass}
                required
                type={"password"}
                placeholder="confirm password"
                style={{ fontSize: "1.2rem", padding: "2%" }}
                onChange={(event) => {
                  if (event.target.value !== regpass)
                    setMatch("password does not match");
                  else setMatch("password matched");
                  setcnfpass(event.target.value);
                }}
              />
              <span
                style={{
                  color: `${match === "password matched" ? "green" : "red"}`,
                }}
              >
                {match}
              </span>
              <button
                type="submit"
                style={{
                  width: "fit-content",
                  padding: "1%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </Modal>
      <Modal open={logoutmodal} onClose={()=>setLogoutModal(false)}>
        <div className={classes.logout}
        style={{
          position: "absolute",
          top: "35%",
          left: "35%",
          translate: "-50% -50%",
          padding: "2vw",
          backgroundColor: "whitesmoke",
          width: "20rem",
          border: "1.5px solid black",
          borderRadius: "15px",
        }}>
          <h2>Do you really want to logout?</h2>
          <p style={{display:'flex',gap:'2.7rem'}}>
          <button style={{fontSize:'1.4rem',padding:'1%',cursor:'pointer'}}
          onClick={()=>{detail.logout()
          setLogoutModal(false)}}>Logout</button>
          <button style={{fontSize:'1.4rem',padding:'1%',cursor:'pointer'}}
          onClick={()=>setLogoutModal(false)}>Cancel</button>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Navigation;

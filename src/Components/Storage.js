import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./Data";
import { v4 as uuid } from "uuid";

export const Storage = createContext();

export const Contxt = (props) => {
  const [user, setUser] = useState("");
  const [user1, setUser1] = useState("kamal");
  const [pass1, setPass1] = useState("1234");
  var alldata = [
    ...data.other,
    ...data.riding,
    ...data.arts,
    ...data.puzzle,
    ...data.dolls,
  ];
  const [print, setPrint] = useState(data.other);
  const nav = useNavigate();
  const [srch1, setSrch1] = useState("");
  const [cartarr, setcartarr] = useState([]);

  const goto =(val)=>{
    if(val.h3==='RIDING')
    setPrint(data.riding)
    if(val.h3==='ART')
    setPrint(data.arts)
    if(val.h3==='GAMES')
    setPrint(data.puzzle)
    if(val.h3==='BUILDING')
    setPrint(data.puzzle)
    if(val.h3==='BABY')
    setPrint(data.other)
    if(val.h3==='DOLLS')
    setPrint(data.dolls)
    nav('/store')
  }
  const riding = () => {
    setPrint(data.riding);
  };
  const art = () => {
    setPrint(data.arts);
  };
  const puzzle = () => {
    setPrint(data.puzzle);
  };
  const doll = () => {
    setPrint(data.dolls);
  };
  const other = () => {
    setPrint(data.other);
  };
  const search = (val) => {
    return alldata.filter((item) => item.name.includes(val));
  };
  const srch = (val) => {
    console.log(val);
    setSrch1(val);
    let arr = search(val);
    setPrint(arr);
    nav("/store");
  };
  const range = (val, vlt) => {
    console.log(vlt);
    let arr1 = [];
    if (vlt === 0) arr1 = data.riding;
    if (vlt === 1) arr1 = data.arts;
    if (vlt === 2) arr1 = data.puzzle;
    if (vlt === 3) arr1 = data.dolls;
    if (vlt === 4) arr1 = data.other;
    if (srch1 === "" && vlt === undefined) arr1 = alldata;
    if (srch1 !== "") arr1 = search(srch1);
    let arr = arr1.filter(
      (item) => item.price >= val[0] && item.price <= val[1]
    );
    setPrint(arr);
  };
  const addToCartHandler = (val) => {
    let arr1 = cartarr.filter((item) => item.name === val.name);
    if (arr1.length === 0)
      setcartarr([{ id: uuid(), quantity: 1, ...val }, ...cartarr]);
    else {
      let arr = cartarr.filter((item) => item.name !== val.name);
      setcartarr([
        { id: uuid(), ...val, quantity: arr1[0].quantity + 1 },
        ...arr,
      ]);
    }
  };
  console.log(cartarr);
  const register = (user, pass) => {
    setUser1(user);
    setPass1(pass);
  };
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser("");
  };
  const incrementHandler = (val) => {
    cartarr.map((item) => {
      if (item.id === val.id) item.quantity += 1;
    });
    setcartarr([...cartarr]);
  };
  const decrementHandler = (val) => {
    cartarr.map((item) => {
      if (item.id === val.id) if (item.quantity > 1) item.quantity -= 1;
    });
    setcartarr([...cartarr]);
  };
  const deleteCartItem =(val)=>{
    let arr = cartarr.filter((item)=>item.id!==val.id)
    setcartarr([...arr])
  }
  const checkoutHandler =()=>{
    setcartarr([])
  }
  return (
    <Storage.Provider
      value={{
        print: print,
        riding: riding,
        art: art,
        puzzle: puzzle,
        doll: doll,
        other: other,
        range: range,
        srch: srch,
        addToCartHandler: addToCartHandler,
        cartarr: cartarr,
        login: login,
        register: register,
        user1: user1,
        pass1: pass1,
        user: user,
        logout: logout,
        incrementHandler: incrementHandler,
        decrementHandler: decrementHandler,
        deleteCartItem:deleteCartItem,
        checkoutHandler:checkoutHandler,
        goto:goto
      }}
    >
      {props.children}
    </Storage.Provider>
  );
};

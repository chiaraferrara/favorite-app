import React, { useState } from "react";
import { Item } from "../utilities/utilities";

function Home() {
  const [item, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const saveItemOnLocalStorage = () => {
    const prevItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const newItem: Item = {
      title: title,
      imgSrc: img,
    };
    const updatedItems = [...prevItems, newItem]
    setItems(updatedItems);
    localStorage.setItem('items',JSON.stringify([updatedItems]))
  };

  const cardStyle = {
    maxWidth: "540px",
    margin: "auto",
  };

  return (
    <>
      
        <div className="card" style={cardStyle}>
          <div className="card-body">
            <form
      id='itemform'
      name='itemform'
      action='#'
      onSubmit={e =>{
        e.preventDefault(),
        saveItemOnLocalStorage()
      }}><input
              className="form-control form-control-lg"
              type="text"
              placeholder="Title"
              onChange={event => setTitle(event.target.value)}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Image URL"
              onChange={event => setImg(event.target.value)}
            />
            <button type="submit" className="btn btn-dark">
              Add
            </button>
            </form>
          </div>
        </div>
      
    </>
  );
}

export default Home;

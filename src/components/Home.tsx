import React, { useState, useEffect } from "react";
import { Item } from "../utilities/utilities";
import { Container, HeartButton, Wrapper } from "./Wrapper";

function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  const saveItemOnLocalStorage = () => {
    const prevItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const newItem: Item = {
      title: title,
      imgSrc: img,
    };
    const updatedItems = [...prevItems, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const items: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(items);
    setTitle("");
    setImg("");
    setLoading(false);
  }, []);

  const addFavorite = (index : number) =>{
    console.log(favorite);
    const prevItems : Item[] = JSON.parse(localStorage.getItem("items") || '[]');
    const prevFavorites : Item[] = JSON.parse(localStorage.getItem("favorites") || '[]');
    const favoriteItem = prevItems[index];
    const updatedFavorites = [...prevFavorites, favoriteItem];
    setFavorite((prev) => !prev);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
  }

  const cardStyle = {
    maxWidth: "100vh",
    margin: "auto"
  };


 
  const imgStyle = {
    height: '200px',
  }
  return (
    <>
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h3 className="card-title">Add an Item</h3>
          <form
            id="itemform"
            name="itemform"
            action="#"
            onSubmit={(e) => {
              e.preventDefault(),
                saveItemOnLocalStorage(),
                setTitle(""),
                setImg("");
            }}
          >
            <input
              className="form-control form-control-lg"
              type="text"
              value={title}
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              className="form-control"
              type="text"
              value={img}
              placeholder="Image URL"
              onChange={(event) => setImg(event.target.value)}
            />
            <button type="submit" className="btn btn-dark">
              Add
            </button>
          </form>
        </div>
      </div>

      <Wrapper>
        {loading ? (
          <p>Loading...</p>
        ) : items.length === 0 ? (
          <p>No items available</p>
        ) : (
          items.map((item, index) => (
            <div key={index}>
              <Container>
                <div className="card-group" >
                  <div className="card" >
                    <img src={item.imgSrc} alt={item.title} style={imgStyle} />
                    <div className="card-title">
                      <strong> {item.title}</strong>
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="card-footer">
                    <HeartButton isFavorite = {favorite}
                    key={index}
                    index={index}
                    type="button" onClick={() => {addFavorite(index)}}>&#10084;</HeartButton>
                  </div></div>
                </div>
              </Container>
            </div>
          ))
        )}
      </Wrapper>
    </>
  );
}

export default Home;

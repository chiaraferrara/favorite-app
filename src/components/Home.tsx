import React, { useState, useEffect } from "react";
import { Item } from "../utilities/utilities";
import { Button, Container, HeartButton, Wrapper } from "./Styles";

function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [favorites, setFavorites] = useState<Item[]>([]);

  const saveItemOnLocalStorage = () => {
    const prevItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const newItem: Item = {
      id: Math.random(),
      title: title,
      imgSrc: img,
      favorite: false,
    };
    const updatedItems = [...prevItems, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const items: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const updatedItems = items.map((item) => ({
      ...item,
      favorite: false,
    }));
    setItems(updatedItems);
    setTitle("");
    setImg("");
    setLoading(false);
  }, []);

  const updateItem = (id: number) => {
    const prevItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const newItems = prevItems.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };

  const addFavorite = (index: number) => {
    console.log(favorite);
    const prevItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const prevFavorites: Item[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const favoriteItem = prevItems[index];

    const updatedFavorites = [...prevFavorites, favoriteItem];
    setFavorite((prev) => !prev);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (id: number) => {
    const prevFavs: Item[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const updatedFavorites = prevFavs.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites([...updatedFavorites]);
  };

  const removeItem = (id: number) => {
    const prevItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const index: number = prevItems.findIndex((item) => item.id == id);
    if (index !== 1) {
      prevItems.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(prevItems));
      removeFromFavorites(id);
      setItems([...prevItems]);
    } else {
      console.log("not found");
    }
  };

  const cardStyle = {
    maxWidth: "100vh",
    margin: "auto",
  };

  const imgStyle = {
    height: "200px",
  };
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
                <div className="card-group">
                  <div className="card">
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
                      <Button
                        onClick={() => {
                          removeItem(item.id);
                          removeFromFavorites(item.id);
                        }}
                      >
                        Remove Item
                      </Button>
                      {item.favorite == true ? (
                        <HeartButton
                          key={index}
                          onClick={() => {
                            updateItem(item.id);
                            removeFromFavorites(item.id);
                          }}
                          type="button"
                        >
                          &#10084;
                        </HeartButton>
                      ) : (
                        <Button
                          type="button"
                          onClick={() => {
                            addFavorite(index);
                            updateItem(item.id);
                          }}
                        >
                          &#10084;
                        </Button>
                      )}
                    </div>
                  </div>
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

import React, { useState, useEffect } from "react";
import { Container, HeartButton, Wrapper } from "./Styles";
import { Item } from "../utilities/utilities";

function Favorites() {
  const [favorites, setFavorites] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const items: Item[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(items);
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
  };

  const removeFromFavorites = (id: number) => {
    const prevFavs: Item[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const updatedFavorites = prevFavs.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    updateItem(id);

    setFavorites([...updatedFavorites]);
  };

  return (
    <>
      <h1>This is your favorites dashboard</h1>
      <Wrapper>
        {loading ? (
          <p>Loading...</p>
        ) : favorites.length === 0 ? (
          <p>No items available</p>
        ) : (
          favorites.map((item, index) => (
            <div key={index}>
              <Container>
                <div className="card-group">
                  <div className="card">
                    <img src={item.imgSrc} alt={item.title} />
                    <div className="card-title">
                      <strong> {item.title}</strong>
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>

                    <HeartButton
                      key={index}
                      type="button"
                      onClick={() => {
                        removeFromFavorites(item.id);
                      }}
                    >
                      remove from favorites
                    </HeartButton>
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

export default Favorites;

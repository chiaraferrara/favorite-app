import styled from "@emotion/styled";

export const Wrapper = styled.div(() => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
}));

export const Container = styled.div(() => ({
  margin: "4px",
  maxWidth: "250px",
}));

export const HeartButton = styled.button(() => ({
  border: "transparent",
  color: "#c0321e",
}));

export const Button = styled.button(() => ({
  border: "transparent",
  color: "#000000",
}));

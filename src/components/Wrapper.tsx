import styled from "@emotion/styled";

export const Wrapper = styled.div(() => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
}));

export const Container = styled.div(() => ({
  margin: "4px",
  maxWidth: "250px"
}));


export const HeartButton =styled.button<{isFavorite : boolean , index : number }>((props) => ({
    border: 'transparent',
    color: props.isFavorite? '#c0321e' : '#000000'
}))
import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import PenIcon from "@mui/icons-material/EditAttributesOutlined";
import Delete from "@mui/icons-material/Delete";

const Main = styled.div`
  width: 60vw;
  height: 50vh;
  margin: 200px auto;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .topBtns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .btnGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const App = () => {
  return (
    <Main>
      <div className="topBtns">
        <Button variant="text" color="primary">
          Hello PDP !
        </Button>
        <Button variant="contained" color="success">
          Hello PDP !
        </Button>
        <Button variant="outlined" color="error">
          Hello PDP !
        </Button>
      </div>

      <div className="btnGroup">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          color="success"
        >
          <Button color="warning">Tashkent</Button>
          <Button>New York</Button>
          <Button color="primary">London</Button>
        </ButtonGroup>
      </div>

      <div className="icons">
        <Button variant="outlined" color="warning">
          <HomeIcon />
          Home
        </Button>

        <Button variant="contained" color="success">
          <PenIcon />
          Edit
        </Button>

        <Button variant="contained" color="error">
          <Delete />
          Delete
        </Button>
      </div>
    </Main>
  );
};

export default App;

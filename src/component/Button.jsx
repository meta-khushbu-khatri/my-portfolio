import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <ResponsiveWrapper>
      <StyledWrapper>
        <button>Hire me</button>
      </StyledWrapper>
    </ResponsiveWrapper>
  );
};

const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

const StyledWrapper = styled.div`
  button {
    height: 50px;
    margin: 5px;
    width: 120px;
    background: #bg-cyan-800; /* Invalid but overridden anyway */
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: Consolas, Courier New, monospace;
    border: solid #0891B2 2px;
    font-size: 18px;
    color: rgb(161, 161, 161);
    -webkit-transition: 500ms;
    transition: 500ms;
    border-radius: 5px;
    background: linear-gradient(145deg, #2e2d2d, #212121);
    -webkit-box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
    box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
      inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
  }

  button:hover {
    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
    box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
    color: #d6d6d6;
    -webkit-transition: 500ms;
    transition: 500ms;
  }

  button:active {
    -webkit-box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
    box-shadow: 1px 1px 13px #20232e, -1px -1px 33px #545b78;
    color: #d6d6d6;
    -webkit-transition: 100ms;
    transition: 100ms;
  }
`;

export default Button;

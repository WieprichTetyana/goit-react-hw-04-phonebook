import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: calc((1vh + 1vw));
  border: 3px solid lightblue;
  background-color: #71b4f7;
  box-shadow: 3px 4px 7px 3px lightgray;
  padding: 20px;
  border-radius: 12px;
`;
const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 450px;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: white;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  border: 1px solid #272525;
  border-radius: 5px;

  font-weight: 700;
`;
const StyledLabel = styled.label`
  opacity: 0.6;
  font-weight: 600;
`;

const StyledInput = styled.input`
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid #a09e9e;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #0b536f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 0;

  text-align: center;
`;

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ul>
        <StyledListItem>
          <StyledLabel htmlFor="name">Name </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
            value={name}
            placeholder="Name"
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="number">Number </StyledLabel>
          <StyledInput
            type="tel"
            name="number"
            id="number"
            required
            onChange={handleChange}
            value={number}
            placeholder="Number"
          />
        </StyledListItem>
      </ul>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

import { Component } from 'react';
import styled from 'styled-components';

const StyledContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 450px;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: white;
  border: none;
  outline: none;
  border-bottom: 1px solid;
  border: 1px solid #a09e9e;
  border-radius: 5px;
`;

const StyledSpan = styled.span`
  opacity: 0.6;
  font-weight: 700;
  font-size: 18px;
`;

const StyledBtn = styled.button`
  background-color: #ff6961;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e74c3c;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export class ContactListItem extends Component {
  render() {
    return this.props.filteredContacts.map(item => (
      <StyledContactItem key={item.id}>
        <p>
          <StyledSpan>{item.name}:</StyledSpan> {item.number}
        </p>
        <StyledBtn onClick={() => this.props.onDeleteContact(item.id)}>
          Delete
        </StyledBtn>
      </StyledContactItem>
    ));
  }
}

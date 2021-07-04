import React from 'react'
import styled from 'styled-components'

const BaseStyle = styled.div`
  font-size: 14px;
  font-weight: 300;
  position: relative;
  z-index: 10;
`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.typo.inputFooter};
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.typo.toggle};
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 10px 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: ${({
      theme: {
        colors: { boxShadow }
      }
    }) => `
      0 1px 1px ${boxShadow.todoPrimary}, 
      0 8px 0 -3px ${boxShadow.todoFooter}, 
      0 9px 1px -3px ${boxShadow.todoPrimary}, 
      0 16px 0 -6px ${boxShadow.todoFooter}, 
      0 17px 2px -6px ${boxShadow.todoPrimary}
    `};
  }
`

const Counter = styled(BaseStyle)``

const ClearCompleted = styled(BaseStyle)`
  cursor: pointer;
`

const FilterGroup = styled(BaseStyle)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const FilterItem = styled(BaseStyle)`
  cursor: pointer;
  padding: 3px 7px;
  margin: 0 3px;
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.border.filterSelected : 'transparent'};
  border-radius: 4px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.filterHover};
  }
`

const onClearCompleted = () => {
  console.log('Clear completed tasks.')
}

const TodoFooter = () => {
  return (
    <Wrapper>
      <Counter>1 item left</Counter>
      <FilterGroup>
        <FilterItem selected>All</FilterItem>
        <FilterItem>Active</FilterItem>
        <FilterItem>Completed</FilterItem>
      </FilterGroup>
      <ClearCompleted onClick={onClearCompleted}>
        Clear completed
      </ClearCompleted>
    </Wrapper>
  )
}

export default TodoFooter

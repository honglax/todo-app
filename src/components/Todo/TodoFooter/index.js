import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FILTER_TYPES, NOOP_FUNC } from '@constants/'
import { isPlural } from '@utils'

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

const Counter = styled(BaseStyle)`
  box-sizing: border-box;
`

const ClearCompleted = styled(BaseStyle)`
  cursor: pointer;
  ${({ isVisible }) => !isVisible && 'visibility: hidden;'}
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

const TodoFooter = ({
  tasks,
  filterType,
  onFilterTasks,
  clearCompletedTask
}) => {
  const [activeTasks, setActiveTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    handleTasks()
  })

  const handleTasks = () => {
    let activeTasks = 0
    let completedTasks = 0
    tasks.map(({ isCompleted }) => {
      if (isCompleted) {
        completedTasks++
      } else {
        activeTasks++
      }
    })
    setActiveTasks(activeTasks)
    setCompletedTasks(completedTasks)
  }

  return tasks.length ? (
    <Wrapper>
      <Counter>
        {activeTasks} active item
        {isPlural(activeTasks) ? 's' : ''} left
      </Counter>
      <FilterGroup>
        {Object.values(FILTER_TYPES).map((type, idx) => (
          <FilterItem
            key={`${idx}-${type}`}
            selected={filterType === type}
            onClick={() => onFilterTasks(type)}
          >
            {type}
          </FilterItem>
        ))}
      </FilterGroup>
      <ClearCompleted
        isVisible={completedTasks > 0}
        onClick={clearCompletedTask}
      >
        Clear completed
      </ClearCompleted>
    </Wrapper>
  ) : (
    <div></div>
  )
}

TodoFooter.propTypes = {
  tasks: PropTypes.array,
  filterType: PropTypes.string,
  onFilterTasks: PropTypes.func,
  clearCompletedTask: PropTypes.func
}

TodoFooter.defaultProps = {
  tasks: [],
  filterType: FILTER_TYPES['ALL'],
  onFilterTasks: NOOP_FUNC,
  clearCompletedTask: NOOP_FUNC
}

export default TodoFooter

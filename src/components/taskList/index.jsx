import React from "react";
import FilterBox from "../filterBox";
import FilterButton from "../filterButton";
import FilterInput from "../filterInput";
import TaskItem from "../task";
import AddTask from "../addTask";
import styled from "styled-components";

const ClearSearch = styled.p`
  font-size: 14px;
  color: #848484;
`;

const ClearSearchButton = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const TaskList = (props) => {
  const { task, search, setSearch, filterTasks } = props;

  console.log('Props', props)

  const renderTaskFilter = () => {
    if (filterTasks.length === 0 && search) {
      return (
        <ClearSearch>
          Your search found no results.{" "}
          <ClearSearchButton onClick={() => setSearch("")}>
            Clean the search here
          </ClearSearchButton>{" "}
          to see all items.
        </ClearSearch>
      );
    }
    if (task.length > 0) {
      return <TaskItem {...props} />;
    }
  };
  return (
    <>
      <FilterBox>
        <FilterButton {...props} />
        <FilterInput {...props} />
      </FilterBox>
      <AddTask {...props} />
      {renderTaskFilter()}
    </>
  );
};

export default TaskList;

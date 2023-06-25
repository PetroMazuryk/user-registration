import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
// import css from './TaskList.module.css';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <>
      <TransitionGroup>
        {tasks.map(({ id, text }, index) => (
          <CSSTransition key={id} timeout={500} classNames="post">
            <Task id={id} text={text} numbers={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

import React, {useState} from "react";
import './App.css';
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () =>  {
    const [courseGoals, setCourseGoals] = useState([
      {id: 'cg1', text: 'Finish the Course'},
      {id: 'cg2', text: 'Learn all about the Course Main Topic'},
      {id: 'cg3', text: 'Helo other students in the Course Q&A'}
    ]);

    const addNewGoalHandler = (newGoal) => {
      // setCourseGoals(courseGoals.concat(newGoal));
      setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
    };

  return <div>
    <h2 className="course-goals">Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler} />
    <GoalList goals={courseGoals} />
  </div>;
}

export default App;

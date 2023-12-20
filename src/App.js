import { useEffect, useState } from 'react';
import './App.css';
import { MyMeals } from './MyMeal';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';


function App() {
  
  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState('');


  useEffect(() => {
    getAllMeals(setMeal)
  }, [])


  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }


  return (
    <div className="App">
        <h1>Meal plan</h1>
        <input type="text" 
              placeholder="add a meal"
              value={title}
              /*   onChange={(e) => setTitle(console.log(e.target.value))}  тестим в консоли*/
              onChange={(e) => setTitle(e.target.value) }
              />
              
        <button onClick={ editing ? 
          () => editMeal(mealId, title, setTitle, setMeal, setEditing) :
          () => addMeal(title, setTitle, setMeal)}>{editing ? "Edit" : "Add"}</button>

      {myMeal.map((meal) => <MyMeals key={meal._id} text={meal.name}
        updatingInInput={() => updatingInInput(meal._id, meal.name)}
        deleteMeal={() => deleteMeal(meal._id, setMeal)}
      />)}

    </div>
  );
}

export default App;

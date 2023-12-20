import axios from 'axios';

/* получить доступ к созданному списку */

const getAllMeals = (setMeal) => {
    /*  axios.get("https://localhost:7000")  */
    axios.get("https://mongo-mealplan.onrender.com")
    .then(({data}) => {console.log(data)
    setMeal(data)
    })
}
/* добавить новую информацию */

const addMeal = (name, setTitle, setMeal) => {
    axios.post("https://mongo-mealplan.onrender.com/saveMeals", { name })
    .then((data) => {
        console.log(data)
        setTitle('')
        getAllMeals(setMeal)
    })
}

/* редактировать информацию */

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.post("https://mongo-mealplan.onrender.com/editMeal", { _id:mealId, title })
    .then((data) => {
        console.log(data)
        setTitle('')
        setEditing(false)
        getAllMeals(setMeal)
    })
}

/* удалить информацию */

const deleteMeal = (_id, setMeal) => {
    axios.post("https://mongo-mealplan.onrender.com/deleteMeal", { _id })
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}


export { getAllMeals, addMeal, editMeal, deleteMeal };
import axios from 'axios';

/* получить доступ к созданному списку */

const getAllMeals = (setMeal) => {
    /*  axios.get("https://localhost:7000")  */
    axios.get("https://mongodb-planer.onrender.com")
    .then(({data}) => {console.log(data)
    setMeal(data)
    })
}
/* добавить новую информацию */

const addMeal = (name, setTitle, setMeal) => {
    axios.post("https://mongodb-planer.onrender.com/saveMeals", { name })
    .then((data) => {
        console.log(data)
        setTitle('')
        getAllMeals(setMeal)
    })
}

/* редактировать информацию */

const editMeal = (mealId, name, setTitle, setMeal, setEditing) => {
    axios.post("https://mongodb-planer.onrender.com/editMeal", { _id:mealId, name })
    .then((data) => {
        console.log(data)
        setTitle('')
        setEditing(false)
        getAllMeals(setMeal)
    })
}

/* удалить информацию */

const deleteMeal = (_id, setMeal) => {
    axios.post("https://mongodb-planer.onrender.com/deleteMeal", { _id })
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}

const deleteAllMeal = (_id, setMeal ) => {
    axios.post("https://mongodb-planer.onrender.com/deleteAllMeal", { _id })
    .then((data) => {
        console.log(data)
        getAllMeals([])
    })
}


export { getAllMeals, addMeal, editMeal, deleteMeal, deleteAllMeal };

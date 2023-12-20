import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

export const MyMeals = ( {text, updatingInInput, deleteMeal} ) => {
    return(
        <div>
            <p>{text}</p>
            <CiEdit onClick={updatingInInput} />
            <AiOutlineDelete onClick={deleteMeal} />
        </div>
    )
}
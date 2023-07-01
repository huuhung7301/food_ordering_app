import AvailableMeals from "./AvailableMeal";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
  );
};

export default Meals;

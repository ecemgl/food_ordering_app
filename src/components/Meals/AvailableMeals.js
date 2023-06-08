import { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading , setLoading] = useState(false)


  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetch(
        "https://restaurant-app-server.herokuapp.com/api/foods"
      ).then((response) => {
        return response.json()
      });
      console.log(data)
      setMeals(data.data);
      setLoading(false)
    };
    setLoading(true)
    fetchMeals().catch((err) => {
      setLoading(false)
      console.log(err)
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
      ingredients={meal.ingredients}
      spicy={meal.spicy}
      vegetarian={meal.vegetarian}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {loading ? <div style = {{color : "black"}}>Yükleniyor...</div> :
          <ul>{mealsList}</ul>
        }
      </Card>
    </section>
  );
};

export default AvailableMeals;

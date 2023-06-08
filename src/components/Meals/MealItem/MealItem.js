import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price}₺`;
  const ingredients = `${props.ingredients}`;
  const spicy = `${props.spicy}`;
  const vegetarian = `${props.vegetarian}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <img src={props.image} style={{width:'5rem', height:'5rem'}} />
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.ingredients}>{ingredients}</div>
        <div className={classes.price}>{price}</div>
        {/* <div className={classes.price}>{spicy}</div>
        <div className={classes.price}>{vegetarian}</div> */}
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

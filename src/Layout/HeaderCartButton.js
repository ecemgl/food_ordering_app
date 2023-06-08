import classes from "./HeaderCartButton.module.css";
import CartIcon from "../components/Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import { Button } from 'antd';
import  { ShoppingCartOutlined } from '@ant-design/icons';
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartContext = useContext(CartContext);
    const { items } = cartContext;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <Button className={btnClasses} type="text" icon={<ShoppingCartOutlined />} size='large' onClick={props.onClick} style={{display:'flow-root'}}>
    Sepetin
    <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderCartButton;

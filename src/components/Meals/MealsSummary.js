import classes from "./MealsSummary.module.css";
import { Card, Space } from 'antd';
import React from 'react';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <Card
      title="Sıcak ve lezzetli yemekler, şimdi sizinle"
      style={{
        width: '100%'
      }}
      >
      <p>
        Yemek listesinden istediğiniz yemeği seçin ve sepetinize ekleyin. Biraz sonra kapınızda !
      </p>
      <p>
        Usta şeflerimiz size en güzel yemekleri en hızlı şekilde sunmak için çalışıyor. 
      </p>
    </Card>
    </section>

    
  );
};

export default MealsSummary;

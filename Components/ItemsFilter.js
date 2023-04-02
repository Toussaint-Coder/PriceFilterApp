import React, { Fragment, useState } from "react";
import Button from "./Button";
import classes from "./ItemFilter.module.css"
const ItemFilter = (props) => {
      const [enteredFilter , setEnteredFilter] = useState("");  
      const  FilterHandler = (e) => {
        setEnteredFilter(e.target.value);
        
        
      }
      const addItemHnadler = () => {
        props.onAFilter(enteredFilter);        
      }
    return (
      <Fragment>
        <div className={classes.grid}>
          <div className={classes.filter}>
            <div className={classes.filteredby}>
              <label htmlFor="selector" style={{ color: "white" }}>
                Filtered by :
              </label>
              <select onChange={FilterHandler} id="selector">
                <option value="Filtered by">All</option>
                <option value="Price">Price</option>
              </select>
            </div>
            <Button className={classes.cursor} onClick={addItemHnadler}>
              filter
            </Button>
          </div>
        </div>
      </Fragment>
    );
}
export default ItemFilter;
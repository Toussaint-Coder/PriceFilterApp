import React , {Fragment, useState}from "react";
import classes from "./Filters.module.css";
import img from "../assets/img.png"
import ItemFilter from "./ItemsFilter";

const Filter = () => {
  const [filteredby , setFiliteredby] = useState("")
  const FilterItemsList = [
    { title: "Buyenzi house", price: 12000 },
    { title: "kigobe house", price: 1000000 },
    { title: "buterere house", price: 3000000 },
    { title: "kamenge House", price: 50000 },
    { title: "kiriri house", price: 1500000 },
    { title: "kinanira house", price: 1200000 },
    { title: "Buyenzi house", price: 12000 },
    { title: "kigobe house", price: 1000000 },
    { title: "buterere house", price: 300000 },
    { title: "kamenge House", price: 50000 },
    { title: "kiriri house", price: 1400000 },
    { title: "kinanira house", price: 1200000 }
  ];
  getSortedItems();
  const selectedFilter = (enteredFilter) => {
    setFiliteredby(enteredFilter);
    if(filteredby === "Name"){
      FilterItemsList.sort((a , b) => {
        return a.price - b.price;
      });
      getSortedItems();
    }
  }  
  function  getSortedItems(){
    return (
      <div className={classes.flex}>
            {FilterItemsList.map(
              (filteritem) =>
              
                filteritem.price > 1500000 && (
                  
                  <Fragment>
                    <div className={classes.items} key={Math.random()}>
                      <div className={classes.img}>
                        <img src={img} alt="" />
                      </div>
                      <h1
                        className={classes.content}
                        itemtitle={filteritem.title}
                      >
                        {filteritem.title}
                      </h1>
                      <div itemprice={filteritem.price}>{filteritem.price}</div>
                    </div>
                  </Fragment>
                )
            )}
            </div>
    )
  }
    return (
      <Fragment>
        <ItemFilter onAFilter={selectedFilter} />

        {filteredby === "Price" ? (
          <div className={classes.flex}>
            <div style={{ width: "100%", padding: "1rem" }}>
              <h1 style={{ color: "white", textAlign: "center" }}>
               Most Expensive Houses
              </h1>
            </div>
            {FilterItemsList.map(
              (filteritem) =>
              
                filteritem.price > 1500000 && (
                  
                  <Fragment>
                    <div className={classes.items} key={Math.random()}>
                      <div className={classes.img}>
                        <img src={img} alt="" />
                      </div>
                      <h1
                        className={classes.content}
                        itemtitle={filteritem.title}
                      >
                        {filteritem.title}
                      </h1>
                      <div itemprice={filteritem.price}>{filteritem.price}</div>
                    </div>
                  </Fragment>
                )
            )}
            <div style={{ width: "100%", padding: "1rem" }}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Expensive Houses
              </h1>
            </div>
            {FilterItemsList.map(
              (filteritem) =>
                filteritem.price > 500000 && (
                  <Fragment>
                    <div className={classes.items} key={Math.random()}>
                      <div className={classes.img}>
                        <img src={img} alt="" />
                      </div>
                      <h1
                        className={classes.content}
                        itemtitle={filteritem.title}
                      >
                        {filteritem.title}
                      </h1>
                      <div itemprice={filteritem.price}>{filteritem.price}</div>
                    </div>
                  </Fragment>
                )
            )}
            <div style={{ width: "100%", padding: "1rem" }}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Cheap Houses
              </h1>
            </div>
            {FilterItemsList.map(
              (filteritem) =>
                filteritem.price < 500000 && (
                  <Fragment>
                    <div className={classes.items} key={Math.random()}>
                      <div className={classes.img}>
                        <img src={img} alt="" />
                      </div>
                      <h1
                        className={classes.content}
                        itemtitle={filteritem.title}
                      >
                        {filteritem.title}
                      </h1>
                      <div itemprice={filteritem.price}>{filteritem.price}</div>
                    </div>
                  </Fragment>
                )
            )}
            <div style={{ width: "100%", padding: "1rem" }}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                Most Cheap Houses
              </h1>
            </div>
            {FilterItemsList.map(
              (filteritem) =>
                filteritem.price < 100000 && (
                  <Fragment>
                    <div className={classes.items} key={Math.random()}>
                      <div className={classes.img}>
                        <img src={img} alt="" />
                      </div>
                      <h1
                        className={classes.content}
                        itemtitle={filteritem.title}
                      >
                        {filteritem.title}
                      </h1>
                      <div itemprice={filteritem.price}>{filteritem.price}</div>
                    </div>
                  </Fragment>
                )
            )}
          </div>
        ) : 
        filteredby === "Name" ? 
        
          <div className={classes.flex}>
            {FilterItemsList.map((filteritem) => (
              <Fragment>
                <div className={classes.items} key={Math.random()}>
                  <div className={classes.img}>
                    <img src={img} alt="" />
                  </div>
                  <h1 className={classes.content} itemtitle={filteritem.title}>
                    {filteritem.title}
                  </h1>
                  <div itemprice={filteritem.price}>{filteritem.price}</div>
                </div>
              </Fragment>
            ))}
          </div>     
        :(
          <div className={classes.flex}>
            {FilterItemsList.map((filteritem) => (
              <Fragment>
                <div className={classes.items} key={Math.random()}>
                  <div className={classes.img}>
                    <img src={img} alt="" />
                  </div>
                  <h1 className={classes.content} itemtitle={filteritem.title}>
                    {filteritem.title}
                  </h1>
                  <div itemprice={filteritem.price}>{filteritem.price}</div>
                </div>
              </Fragment>
            ))}
          </div>
        )}
      </Fragment>
    );
}
export default Filter;
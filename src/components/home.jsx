import { useEffect, useState } from "react";
import Food from "./food";
import styled from 'styled-components';
import Search from "./search";
import { motion } from "framer-motion";

const Home = () => {

    const myApi = "dc08124ff78a4ea9855372247525457d";
    

    
    const [myItems, setMyItems] = useState([]);

    const getItems = async () => {
        const check = localStorage.getItem("items");
    
          if (check) {
            setMyItems(JSON.parse(check));
          } else {
            const api = await fetch(
              `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=9`
              );
              const data = await api.json();
              setMyItems(data.recipes);
              localStorage.setItem("items", JSON.stringify(data.recipes));
          }
    
        }
    useEffect(() => {
        getItems();
    }, []);

    return(
        <motion.div className="app"
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.7}}>
          
           <MyH3>Welcome to El-Shad Food Recipe</MyH3>
                <Search />
                  {myItems?.length > 0 ? (
        <div className="container">
          {myItems.map((items) => (
            <Food food={items} key={items.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Food found</h2>
        </div>
      )}
        </motion.div>
    )
}

const MyH3 = styled.text`
color: white;
font-size: 15px
`

export default Home
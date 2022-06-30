import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = () => {

    return(
       <motion.div
       animate={{opacity: 1}}
       initial={{opacity: 0}}
       exit={{opacity: 0}}
       transition={{ duration: 0.7}}
       >
           <Form>
               <input type="text" placeholder="your name" />
               <input type="text" placeholder="telephone" />
               <input type="text" placeholder="Type of Food Ordered" />
               <input type="text" placeholder="Your Address" />

               <button>Send Order</button>
           </Form>
       </motion.div>
    )
}

export default Contact


const Form = styled.form`
padding: 30px;
margin-top: 40px;
input{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-radius: 20px;
    text-indent: 20px;
    border: none;
    color: orange;
}

button{
    width: 100%;
    height: 50px;
    background: orange;
    border: none;
    color: white;
    margin-top: 30px;
    font-size: 15px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    cursor: pointer;
}

button:hover{
    background: black;
    color: orange;
}
`

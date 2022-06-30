import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    }

    return(
        <div className='search-ff'>
            
            <FormStyle onSubmit={submitHandler}>
               <div>
                   
               <input onChange={(e) => setInput(e.target.value)}
               placeholder="search your favorite food"
               type='text' value={input} />

        <FaSearch></FaSearch>
        
               </div>
            </FormStyle>

        </div>
    )
}

const FormStyle = styled.form`
    margin: 2rem 20rem;

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: black;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
        text-indent: 30px;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }


    @media screen and (max-width: 768px) {
        margin: 2rem 5rem;
    }
`
export default Search
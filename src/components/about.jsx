import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {

    return(
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.7}}
        >
        <AboutUs>
<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">
</div>
    <p>

<h3>Product/Services</h3>
<span>EL SHAD</span> makes good food simple and easy. In our markets, we are the premier delivery service for natural single serve and family-sized portions meals as well as other healthy and tasty staples like milk, eggs, meats, bread, and grains. We grow, select, deliver, and manufacture food with the highest level of integrity.

<h3>Target Market</h3>
We currently serve three distinct markets: (1) Texas (2) Oklahoma and (3) Southern Arizona. With a total population of approximately 4.2 million and average household size of 2.59, these markets produce a total addressable market of approximately 1.6 million households. Assuming 19% of those homes are interested in organics, our targetable market is 307,000 households, and current market penetration is 3.9%.

<h3>Customers</h3>
We currently sell approximately 7,000 boxes of produce/groceries per week to about 12,000 active customers across all three regions.

Sales/Marketing Strategy
In 2019: (1) internal sales force drives geographic expansion (by adding new community drop sites), (2) direct marketing efforts to in-fill Seattle and Anchorage markets, and (3) increase average order size by adding grocery items. Starting in [YEAR], we will begin exporting the business to new markets. We plan to add one new market in [YEAR] and one per quarter thereafter.
            </p>
        </AboutUs>
        </motion.div>
    )
}

export default About

const AboutUs = styled.div`
padding: 50px;

p{
    color: white;
}

h3{
    color: orange;
    padding: 20px 0px;
}

span{
    color: orange;
}
`
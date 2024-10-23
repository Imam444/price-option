import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({features}) => {
    return (
        <div >
            <p className='flex items-center'><FaCheckCircle className='text-green-500 mr-4' ></FaCheckCircle>{features}</p>
        </div>
    );
};


Feature.propTypes ={
    features:PropTypes.string
}

export default Feature;
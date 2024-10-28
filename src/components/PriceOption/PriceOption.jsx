/* eslint-disable react/prop-types */
import Features from "../Features/Features";

const PriceOption = ({price}) => {

   
    return (
        <div className=" bg-blue-500 p-5 text-white rounded-lg space-y-4 text-center flex flex-col">
            <h1 className="text-5xl font-bold">{price.duration}</h1>
            <h1 className="text-5xl font-bold">{price.plan_name} Membership</h1>
            <ul className="flex-grow">
                {
                    price.features.map((feature, idx)=><Features key={idx} feature={feature}></Features>)
                }
            </ul>
            <div className="btn w-full"><button>Buy Now</button></div>
        </div>
    );
};

export default PriceOption;
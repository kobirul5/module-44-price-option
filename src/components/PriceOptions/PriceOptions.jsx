import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptionList = [
        {
            "id": 1,
            "plan_name": "Basic",
            "price": 29.99,
            "duration": "Monthly",
            "description": "Access to gym facilities, lockers, and basic support. Ideal for casual users.",
            "features": [
                "Gym access",
                "Locker access",
                "Basic support"
            ]
        },
        {
            "id": 3,
            "plan_name": "Premium",
            "price": 149.99,
            "duration": "Half-Yearly",
            "description": "Unlimited access to all facilities, classes, personal trainer sessions, and premium support.",
            "features": [
                "Gym access",
                "Locker access",
                "Group classes",
                "Personal trainer sessions",
                "Premium support",
                "Wellness seminars"
            ]
        },
        {
            "id": 4,
            "plan_name": "VIP",
            "price": 249.99,
            "duration": "Yearly",
            "description": "All-inclusive access with exclusive perks: personal trainer, diet plan, and wellness coaching.",
            "features": [
                "Gym access",
                "Locker access",
                "Group classes",
                "Personal trainer sessions",
                "Premium support",
                "Diet plan",
                "Wellness coaching",
                "Exclusive member events"
            ]
        }
    ]


    return (


        <div>
            <h1 className="text-4xl font-bold my-5">Price List: {priceOptionList.length}</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    priceOptionList.map(price => <PriceOption key={price.id} price={price}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
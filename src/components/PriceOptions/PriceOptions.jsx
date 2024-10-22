

const PriceOptions = () => {

    const PriceOption= [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 30.00,
      "duration": "month",
      "features": [
        "Access to gym facilities",
        "Group classes",
        "Locker rental"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price": 50.00,
      "duration": "month",
      "features": [
        "Access to gym facilities",
        "Group classes",
        "Locker rental",
        "Personal training session (1 per month)"
      ]
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "price": 80.00,
      "duration": "month",
      "features": [
        "Access to gym facilities",
        "Group classes",
        "Locker rental",
        "Personal training sessions (2 per month)",
        "Nutrition consultation"
      ]
    },
    {
      "id": 4,
      "name": "Annual Membership",
      "price": 300.00,
      "duration": "year",
      "features": [
        "Access to gym facilities",
        "Group classes",
        "Locker rental",
        "1 free personal training session",
        "Discount on merchandise"
      ]
    }
  ]

    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
                PriceOptions.map(option => <PriceOption key={option} option={option.id}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
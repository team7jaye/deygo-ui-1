import ActivitiesList from "@/components/ActivitiesList";

const Restaurants = () => {
  const items = [
    { name: "Restaurant 1", time: "42 mins", location: "Ikorodu", type: "Fine-dining", foodType:"test", likes:16 },
    { name: "Restaurant 2", time: "30 mins", location: "Lekki", type: "Casual" , foodType:"test", likes:20},
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Your Page</h1>
      <div>
      <ActivitiesList items={items} />
    </div>   
     </div>
  );
};

export default Restaurants;

import Card from './Card';  // Adjust based on your actual directory structure

function Tours({tours,removeTour})
{
    return(
     <div className="container">
        <div>
         <h2 className="title">Plan with Pranjali</h2>
        </div>
        <div className="cards">
            
               
                {tours.map((tour) => (
                    <Card key={tour.id} {...tour} removeTour={removeTour} />
                ))}
            
        </div>
     </div>
    );

}
export default Tours;

import card2 from "../../assets/Logo/card2.jpg"
import card3 from "../../assets/Logo/card3.jpg"

const Distination = () => {
    return (
        <div>
           <h1 className="text-4xl font-medium p-10">Features Destinations</h1> 
           <div className="flex justify-center items-center gap-5 mt-2">
              <div>
              <div className="card w-80 bg-base-200 shadow-xl">
  <figure className="">
    <img src={card3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   
    <p>Stop over the airline with turki airline in istanbul</p>
    <div className="card-actions">
      <button className="btn btn-warning">view more</button>
    </div>
  </div>
</div>
              </div>
              <div>
              <div className="card w-80 bg-base-200 shadow-xl">
  <figure className="">
    <img src={card2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   
    <p>Stop over the airline with turki airline in istanbul</p>
    <div className="card-actions">
      <button className="btn btn-warning">view more</button>
    </div>
  </div>
</div>
              </div>
              <div>
              <div className="card w-80 bg-base-200 shadow-xl">
  <figure className="">
    <img src={card3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   
    <p>Stop over the airline with turki airline in istanbul</p>
    <div className="card-actions">
      <button className="btn btn-warning">view more</button>
    </div>
  </div>
</div>
              </div>
           </div>
        </div>
    );
};

export default Distination;
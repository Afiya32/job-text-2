import card2 from "../../assets/Logo/card2.jpg"
import card3 from "../../assets/Logo/card3.jpg"


const TravelBlog = () => {
    return (
        <div>
             <div>
           <h1 className="text-4xl font-medium p-10">Travel Blog</h1> 
           <div className="flex justify-center items-center gap-5 mt-2">
              <div>
              <div className="card w-80 bg-base-200 shadow-xl">
  <figure className="">
    <img src={card3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex justify-between items-center gap-2 mt-5">
    <div> <h1 className="text-orange-500">Work and Travel</h1></div>
    <div> <p>16 December 2024</p></div>
  </div>
  <div className="card-body items-center text-center">
   
    <p>Stop over the airline with turki airline in istanbul</p>
    <div className="card-actions">
    <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
      <button className="btn btn-warning">Read more</button>
    </div>
  </div>
</div>
              </div>
              <div>
              <div className="card w-80 bg-base-200 shadow-xl">
  <figure className="">
    <img src={card2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex justify-between items-center gap-2 mt-5">
    <div> <h1 className="text-orange-500">Work and Travel</h1></div>
    <div> <p>16 December 2024</p></div>
  </div>
  <div className="card-body items-center text-center">
   
    <p>Stop over the airline with turki airline in istanbul</p>
    <div className="card-actions">
    <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
      <button className="btn btn-warning">Read more</button>
    </div>
  </div>
</div>
              </div>
              <div>
              <div className="card w-80 bg-base-200 shadow-xl">
  <figure className="">
    <img src={card3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="flex justify-between items-center gap-2 mt-5">
    <div> <h1 className="text-orange-500">Work and Travel</h1></div>
    <div> <p>16 December 2024</p></div>
  </div>
  <div className="card-body items-center text-center">
   
    <p>Stop over the airline with turki airline in istanbul</p>
    <div className="card-actions">
    <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
      <button className="btn btn-warning">Read more</button>
    </div>
  </div>
</div>
              </div>
           </div>
        </div>
        </div>
    );
};

export default TravelBlog;
import add1 from "../../assets/Logo/add1.png"
import add2 from "../../assets/Logo/add2.png"
import add3 from "../../assets/Logo/add3.png"

const Addeds = () => {
    return (
        <div>
        <h1 className="text-4xl font-medium p-10">Deals and Offers</h1> 
        <div className="flex justify-center items-center gap-5 mt-2">
           <div>
           <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={add1} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">With bkash payment only</h2>
    <p className="text-blue-500">Click the button to watch on Jetflix app.</p>
    
  </div>
</div>
           </div>
           <div>
           <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={add2} alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="card-title">With bkash payment only</h2>
    <p className="text-blue-500">Click the button to watch on Jetflix app.</p>
    
  </div>
</div>
           </div>
           <div>
           <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={add3} alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="card-title">With bkash payment only</h2>
    <p className="text-blue-500">Click the button to watch on Jetflix app.</p>
    
  </div>
</div>
           </div>
        </div>
     </div>
    );
};

export default Addeds;
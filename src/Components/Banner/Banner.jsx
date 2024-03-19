import { FaRegCircle ,FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div className="h-[60vh] bg-transparent opacity-90 w-10/12 mx-auto mt-32">
            <h1 className="text-white font-semibold text-5xl">Welcome to <span className="text-blue-500">AirBook</span></h1>
            <div className="bg-white h-[20vh] rounded-2xl mt-2">
                <div className="flex justify-evenly items-center">
                    <div className="flex justify-center items-start mt-2 gap-1 right-0">
                        <button className="btn btn-sm bg-white"> <FaRegCircle /> One Way</button>
                        <button className="btn btn-sm bg-blue-500"> <FaRegDotCircle />Round Trip</button>
                    </div>
                    <div className="flex justify-center items-start mt-2 gap-1 left-0">
                        <button className="btn btn-sm bg-slate-200 text-blue-500">1 Traveller<IoIosArrowDown /></button>
                        <button className="btn btn-sm bg-slate-200 text-blue-500">Economy<IoIosArrowDown /></button>
                    </div>
                </div>

            <div className="flex justify-center items-center gap-2 mt-2">
                <div className="flex justify-center items-center border p-2 rounded-xl">
                    <h1>DAC</h1>
                    <div className="divider">|</div>
                    <div>
                    <h1>Dhaka</h1>
                    <p>Hazrat sahajalar</p>
                    </div>
                </div>
                <div className="flex justify-center items-center p-2 border rounded-xl">
                    <h1>DAC</h1>
                    <div className="divider">|</div>
                    <div>
                    <h1>Dhaka</h1>
                    <p>Hazrat sahajalar</p>
                    </div>
                </div>
                <div className="flex justify-center items-center p-2 border rounded-xl">
                    <h1>DAC</h1>
                    <div className="divider">|</div>
                    <div>
                    <h1>Dhaka</h1>
                    <p>Hazrat sahajalar</p>
                    </div>
                </div>
                <div className="flex justify-center p-2 items-center border rounded-xl">
                    <h1>DAC</h1>
                    <div className="divider">|</div>
                    <div>
                    <h1>Dhaka</h1>
                    <p>Hazrat sahajalar</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-warning">
                    <CiSearch />
                    </button>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Banner;
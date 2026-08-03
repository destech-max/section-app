import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function LoginSimple() {
  

  return (
<div className="flex ">
    <div>
<nav className="flex flex-row bg-slate-900 text-white items-center  text-center justify-evenly py-4">
    
 <div className="flex flex-row">
       

        <ul className=" flex flex-row gap-5 justify-center items-center">
            <li className="hover:text-slate-500 hover:bg-slate-700 hover:cursor-pointer hover:py-2 hover:px-5 hover:rounded-full">Product</li>
            <li className="hover:text-slate-500 hover:bg-slate-700 hover:cursor-pointer hover:py-2 hover:px-5 hover:rounded-full">Features</li>
            <li className="hover:text-slate-500 hover:bg-slate-700 hover:cursor-pointer hover:py-2 hover:px-5 hover:rounded-full">Marketplace</li>
            <li className="hover:text-slate-500 hover:bg-slate-700 hover:cursor-pointer hover:py-2 hover:px-5 hover:rounded-full">Company</li>
        </ul>
        </div>

        <div>
            <button className="hover:text-slate-500 hover:bg-slate-700 hover:cursor-pointer hover:py-2 hover:px-7 hover:rounded-full"> Login </button>
        </div>
</nav>

    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 px-4">
        <p className="  flex gap-1 border border-gray-700 rounded-full text-gray-500 mb-8 px-7 ">doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque. 
            <span className="flex font-bold text-purple-600 underline">Read more<ArrowRight className="text-gray-500" /></span> </p>
<h1 className=" text-6xl text-center text-gray-400 mb-6">
    Data to enrich your online business
</h1>
<p className="text-gray-400 w-200 text-center">  ipsum dolor sit, amet consectetur adipisicing elit. Magni saepe sapiente nihil deleniti qui vel quos 
    repellendus inventore necessitatibus 
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea.
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea.
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea.
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea.
    doloremque reiciendis, distinctio, molestias, eum reprehenderit eaque sunt quas odio ea.</p>
    <div className=" flex gap-4 mt-4">
    <button className=" bg-blue-700 rounded py-2 px-5 text-white">
        Get started
    </button>

        </div>
        </div>
        </div>


        <div >
        <img
          src="https://smartway2.com/wp-content/uploads/2021/04/shutterstock_763511701.jpg"
          alt="Desk workspace with a laptop and phone"
          className=" inset-0 h-full w-full object-cover"
        />
      </div>

        </div>
  );
}
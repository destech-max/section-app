import { ArrowRightSquare } from "lucide-react";
import { Link } from "react-router";

export default function LoginSimple() {
  

  return (
<>
<nav className="flex flex-row bg-slate-900 text-white items-center  text-center justify-evenly py-4">
     <div>
        <img className="h-8 w-8 text-indigo-600 mx-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
        alt="tailwin logo"
        >
           
        </img>
     </div>
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
<h1 className=" text-6xl text-center text-gray-400 mb-6">
    Data to enrich your online business
</h1>
<p className="text-gray-400 w-200 text-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni saepe sapiente nihil deleniti qui vel quos 
    repellendus inventore necessitatibus 
    </p>
    <div className=" flex gap-4 mt-4">
   

    <Link 
    to="/data-split"
    className=" flex font-bold gap-2 text-gray-500 bg-slate-700 rounded-full py-2 px-5 "> Learn more <ArrowRightSquare className="text-gray-500" /></Link>
        </div>
        </div>
        </>
  );
}
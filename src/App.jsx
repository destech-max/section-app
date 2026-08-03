import { Route, Routes, Link } from "react-router";
import LoginSimple from "./LoginSimple.jsx";
import LoginSplit from "./LoginSplit.jsx";
import PaymentSuccess from "./PaymentSuccess.jsx";
import DeactivateModal from "./DeactivateModal.jsx";
import ChatlyApp from "./TobiahChat.jsx";
import Data from "./Data.jsx"
import DataSplit from "./DataSplit"
import TrackRecordSection from "./TrackRecordSection.jsx"
import TimelineSection from "./TimelineSection"
import TestimonialsSection from "./TestimonialsSection"
import TestimonialCard from "./TestimonialCard"
import ContactSalesForm from "./ContactSalesForm"
import ContactSalesList from "./ContactSalesList"
import LeadershipSection from "./LeadershipSection"
import OurTeamSection from "./OurTeamSection"

const pages = [
  { name: "Login (simple)", path: "/login" },
  { name: "Payment success", path: "/payment-success" },
   { name: "Data", path: "/Data" },
   { name: "TimelineSection", path: "/time-linesection" },
   { name: "TrackRecordSection", path: "/track-recordsection" },
    { name: "TestimonialSection", path: "/testimonial-section" },
    { name: "TestimonialCard", path: "/testimonial-card" },
     { name: "ContactSalesForm", path: "/contact-saleform" },
     { name: "ContactSalesList", path: "/contact-salelist" },
];

// function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
//           Class Work
//         </h1>
//         <div className="space-y-3">
//           {pages.map((page) => (
//             <Link
//               key={page.path}
//               to={page.path}
//               className="block rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
//             >
//               {page.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function App() {
  return (

 <LeadershipSection/>
  
  // <Routes>
  // //       <Route path="/" element={<Home />} />
  // //     <Route path="/login" element={<LoginSimple />} />
  // //     <Route path="/login-split" element={<LoginSplit />} />
  // //     <Route path="/payment-success" element={<PaymentSuccess />} />
  // //     <Route path="/deactivate" element={<DeactivateModal />} />
  // //     <Route path="/data" element={<Data/>}/>
  // //     <Route path="/data-split" element={<DataSplit/>}/>
  // //     <Route path="/time-linesection" element={<TimelineSection/>}/>
  // //     <Route path="/track-recordsection" element={<TrackRecordSection/>}/>
  //       <Route path="/testimonial-section" element={<TestimonialsSection/>}/>
  //       <Route path="/testimonial-card" element={<TestimonialCard/>}/>
  //       <Route path="/contact-saleform" element={<ContactSalesForm/>}/>
  //       <Route path="/contact-salelist" element={<ContactSalesList/>}/>
  // //   </Routes>
  );
}
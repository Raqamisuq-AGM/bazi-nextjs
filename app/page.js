
import CommonComponent from "./components/HomePage/CommonComponent";
import TypesOfAggent from "./components/HomePage/TypesOfAggent";
import AgentList from "./components/HomePage/AgentList";
import Complain from "./components/HomePage/Complain";

export default function HomePage() {
  
  return(
    <div className="home-page">
     <section>
        <Complain/>
     </section>
      <section className="agent-list">
          <AgentList></AgentList>
      </section>

      <section className="how-to-create-account py-5">
          <CommonComponent 
          firstA={"Baaji365"} 
          lastA={"আমাদের অফিসিয়াল ফেসবুক গ্রুপে জয়েন হোন।"} 
          title={"কিভাবে একাউন্ট খুলবেনঃ"} 
          body={"তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তা বুঝতে হলে আপনার নিম্নের তথ্য গুলো পড়া জরুরী। বিস্তারিত জানতে"}
          />
      </section>
      
      <section className="how-to-create-account py-5">
          <CommonComponent 
          lastA={"অনলাইন মাষ্টার এজেন্ট লিস্টঃ"} 
          title={"এজেন্ট লিস্টঃ"} 
          body={`একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকনের উপরে ক্লিক করুন অবথা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মেসেজ করুন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিতে হবে।`}
          />
      </section>
      <section className="typesof-agents">
          <TypesOfAggent />
      </section>

      <section className="how-to-create-account py-5">
          <CommonComponent 
          title={"বাজি ৩৬৫ এর সকল নিয়মাবলি"} 
          btnName={"এখানে ক্লিক করুন"}
          btnPath={"/customer-service"}
          />
      </section>
      <section className="why-create-account py-5">
          <CommonComponent 
          title={"কেন এই সাইটে একাউন্ট করবেন"} 
         listItems={true}
         li1={"ডলার কেনাবেচা নিয়া সমস্যাতে পড়তে হবেনা।"}
         li2={"সবসময় বিকাশ/রকেট/নগদের মাধ্যমে লেনদেন ও করতে পারবেন।"}
         li3={"লেনদেন হবে আপনার মনের মতো একবার লেনদেন করলেই বুঝবেন"}
          />
      </section>

      
    </div>
  );
}



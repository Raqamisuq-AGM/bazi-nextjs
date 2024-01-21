// "use client"

import Link from "next/link";
import LinkTag from "../components/Common/Link";



export const metadata = {
  title: "Static Title",
  description: "Static Description",
};

export default function CustomerServiceAgentPage() {
  return(
    <div className="customer-rules bg-white text-black text-left">
        <div className="page-heading text-center p-5 col">
            <h1>একাউন্ট খুলবেন কিভাবে !!</h1>
            <p>বাজি৩৬৫ এর একাউন্ট এবং এজেন্ট স্বম্পর্কে জানুন</p>
        </div>
        <div className="page-content p-5 col">
            <div className="content ">
              <h3>সবার আগে পড়ে নিন - পুরোটা না পড়ে একাউন্ট খুলবেন না।</h3>
              <p>বাজি৩৬৫ একটি - এজেন্ট বেইজ বেটিং ওয়েব সাইট। বাজি৩৬৫ সাইটে একাউন্ট খুলতে হলে এবং ডিপোজিট করতে হলে আপনাকে এজেন্ট এর সাহায্য নিতে হবে। এজেন্ট ছাড়া আপনি একাউন্ট খুলতে বা ডিপোজিট বা উইথড্র করতে পারবেন না। আপনি যে এজেন্ট এর মাধ্যমে একাউন্ট খুলবেন - তার মাধ্যমেই আপনাকে ডিপোজিট বা উইথড্র করতে হবে। তাই সঠিক এজেন্ট নির্বাচন করা জরুরী।</p>
              <div className="lh-sm  py-5">
                <h4>আমাদের এজেন্ট লিষ্ট দেখতে নিচের লিংক এ ক্লিক করুনঃ</h4>
                <LinkTag path={'https://winpku.com/'} name={'https://winpku.com/'}></LinkTag>
              </div>
              <p>এই এজেন্ট লিষ্ট এর বাইরে কারো সাথে লেনদেন করলে আপনাকে নিজ দ্বায়িত্বে লেনদেন করতে হবে। লিষ্ট এর বাইরে কোন এজেন্ট এর দায়ভার বাজি৩৬৫ নিবে না এবং লিষ্ট এর এজেন্ট দের সব দায়ভার বাজি৩৬৫ কোম্পানীর। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র ম্যাসেনজার ও হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। ম্যাসেনজার ও হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। ম্যাসেনজার ও হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে ম্যাসেনজার ও হোয়াটসাপ আইকন উপরে ক্লিক করুন অথবা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।</p>
            </div>


            <div className="links-area mt-5 py-3">
              <h3>অন্যান্য সাহায্যের জন্যঃ</h3>
              <div className="pb-5">
                   <h4>তথ্যাদি এবং সাহায্যের জন্য হোয়াটসাপ নাম্বারঃ</h4>
                   <h5>Admin</h5>
                   <h5>+97431079027 (Shahriar Imtieaz)</h5>
              </div>
              <div className="py-3">
                 <h5>ফেসবুক পেইজের লিঙ্কঃ</h5>
                 <Link href={'https://www.facebook.com/groups/winpku'}>https://www.facebook.com/groups/winpku</Link>
              </div>
              <div className="py-5">
                 <h5>ফেসবুক গ্রুপের লিঙ্কঃ</h5>
                 <Link href={'https://www.facebook.com/groups/winpku'}>https://www.facebook.com/groups/winpku</Link>
              </div>
              <div className="py-3">
                 <h5>এছাড়া আপনারা আমাদের কাস্টমার সার্ভিস এর সাথে সরাসরি যোগাযোগ করতে পারেন। তাদের নাম্বার গুলো জানতে নিচের লিঙ্কে ক্লিক করুনঃ</h5>
                 <Link href={'https://www.facebook.com/groups/winpku'}>https://winpku.com/</Link>
              </div>

              <div className="py-4">
               <h5>একাউন্ট খোলার আগে নিচের লিঙ্কে ক্লিক করে শর্ত সমুহ জেনে নিন। এই শর্ত সমুহ জানা অত্যন্ত জরুরীঃ</h5>
               <Link href={'/blog'}>নিয়মগুলো জানার জন্য এই লিঙ্ক এ ক্লিক করুন।</Link>
              </div>
              <div className="py-5">
               <h2>অন্যান্য লিঙ্কঃ</h2>
               <h5>ওয়েব সাইট</h5>
             <li>User Link:- <Link href={'https://www.baaji365.live/'}>https://www.baaji365.live/</Link></li>
             <li>Agent Link :- <Link href={'https://msa.baaji365.live/'}>https://msa.baaji365.live/</Link></li>
              </div>
            </div>
        </div>
    </div>
  );
}

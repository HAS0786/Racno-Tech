import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [Option, setOption] = useState("");
  const [SubOption, setSubOption] = useState([]);

  const services = {
    Website: ["Web-AppDevelopment", "Android-App Development", "IOS App Development","UI/UX","App Testing"],
    Graphic: ["Logo Designing", "Cover Designing", "Youtube Thumbnail"],
    YoutubeAnimation: ["Youtube Automation", "CashCow Content", "Long Videos","Short Videos","Podcast Videos","Live Streaming","Vlogs Editing"],
    SocialMediaManagement: ["Facebook (ID & Page) Management", "Instagram Management", "TikTok Management","Youtube Management","Google Management","X Management","Pinterest Management"],
    SEO: ["Site Audit", "On Page SEO", "Off Page SEO","Technical SEO","Advance SEO","Google Business Profile(GBP)","Local SEO","Blogs","Content Writing","Copypwriting","PPC Ads","SEM"],
    DigitalMarketing: ["Youtube Ads", "Google PPC Ads", "X Ads","Facebook Marketing","Instagram Marketing","TikTok Marketing","Google Marketing","X Marketing","Pinterest Marketing","Youtube Marketing"],
    VideoEditing: ["Facebook/Instagram Reels", "DropShipping Video Ads", "Cashcow Content","Automation","Youtube Video Editing","Adobe Premiere Pro","Adobe After Effects","Filmora 13","Final Cut Pro"],
    WordPress: ["Ecommerece Website Development", "Portfolio Website Development", "Custom Website Development","Custom Themes","Custom Plugins"],
    VirtualAssistant: ["Virtual Assistant"],
  };

  const handleOptionChange = (e) => {
    let selection = e.target.value;
    setSubOption(services[selection] || []);
    setOption(selection);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n2aa2e9", "template_b7k7i0f", form.current, {
        publicKey: "FwZ398-oASn9YqayU",
      })
      .then(
        () => {
          alert("Successfully Send")
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="p-9 m-9 border-2 border-gray-600 rounded-md">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-gray-800 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#e6e4e4] font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-200 mt-3">
              Have some big idea or brand to develop and need help? Then reach
              out <b className="font-extrabold text-lg">Recno Tech</b>. We'd love
              to hear about your project and provide help.
            </p>
          </div>

          <form className="ml-auo space-y-4" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter the Name"
              className="w-full rounded-md bg-transparent text-gray-300 py-2.5 px-4 border text-sm outline-[#007bff1a]"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter the Email"
              className="w-full rounded-md bg-transparent text-gray-300 py-2.5 px-4 border text-sm outline-[#007bff]"
            />

            <label>Select Service</label>
            <select
              name="user_service"
              className="w-full rounded-md bg-transparent text-gray-600 py-2.5 px-4 border text-sm outline-[#007bff]"
              onChange={handleOptionChange}
            >
              <option value="">Select Option</option>
              {Object.keys(services).map((select) => (
                <option key={select} value={select}>
                  {select}
                </option>
              ))}
            </select>

            {Option && (
              <>
                <label htmlFor="sub_service">Select SubOption</label>
                <select
                  name="user_sub_service"
                  id="sub_service"
                  className="w-full rounded-md bg-transparent text-gray-600 py-2.5 px-4 border text-sm outline-[#007bff]"
                >
                  {SubOption.map((subOption, index) => (
                    <option key={index} value={subOption}>
                      {subOption}
                    </option>
                  ))}
                </select>
              </>
            )}
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter the message here"
              className="w-full text-gray-300 bg-transparent rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
            />
            <input
              type="submit"
              value="Send"
              className="text-gray-100 bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

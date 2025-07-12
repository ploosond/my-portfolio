"use client";

import { MoveRightIcon } from "lucide-react";
import Intro from "./Intro";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2d673877-1097-413b-8321-1c256f5000df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.success("Form Submission Failed!");
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <Intro
        heading="Connect with me"
        subHeading="Get in touch"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt neque
        temporibus tenetur, eum ipsam a, similique repellat quisquam rerum eius
        magni dolore ab accusantium amet vero, repellendus nam voluptas."
      />

      <form onSubmit={onSubmit} className="max-w-2xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter you name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter you email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <div className="container mx-auto w-max group">
          <button className="bg-black text-white  flex items-center justify-center gap-2 px-12 py-4 rounded-full cursor-pointer">
            Submit now
            <MoveRightIcon
              width={24}
              className="group-hover:translate-x-1 transition-transform duration-500"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

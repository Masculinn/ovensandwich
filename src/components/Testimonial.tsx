import React, { FC } from "react";
import { Quote, Star } from "lucide-react";
import { TestimonialProps } from "@/interfaces";

export default function Testimonial({
  job,
  name,
  title,
  textSize = "text-2xl",
}: TestimonialProps & { textSize?: string }) {
  return (
    <div
      className="w-full mt-8 md:mt-0 max-w-xs p-4 shadow-xl rounded-lg relative  overflow-hidden"
      key={name}
    >
      <div className="absolute -top-8 -right-8 h-24 w-24 bg-gradient-to-br via-white via-50% from-secondary  to-brand rounded-full" />
      <Quote className=" absolute  left-[5%] text-[1.3rem] text-[#727272]" />
      <h2
        className={`bg-gradient-to-br via-white via-50% text-transparent bg-clip-text from-secondary  to-brand  tracking-tighter font-secondary font-extrabold mt-16 ${textSize.toString()}`}
      >
        {title}.
      </h2>

      <div className="flex items-start mt-5 justify-between">
        <div>
          <h2 className="text-[1.2rem] ">{name}</h2>
          <p className="text-[1rem] text-stone-400">{job}</p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className=" fill-[#ffba24] text-[#ffba24] lg:size-5 size-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

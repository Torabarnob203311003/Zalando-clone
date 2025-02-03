import React from "react";

export default function Hero({
  title,
  subtitle,
  linkText,
  images,
  bgColor = "bg-gray-300",
  textColor = "text-black",
  textAlign = "text-left",
  containerPadding = "px-20 py-10",
  imageWidth = "w-80",
  imageHeight = "h-96",
  flexDirection = "lg:flex-row",
}) {
  return (
    <section
      className={`flex flex-col ${flexDirection} items-center justify-between mt-16 ${containerPadding} ${bgColor}`}
    >
      {/* Text Section */}
      <div className={`max-w-lg pb-32 pl-60 text-center lg:${textAlign}`}>
        <h2 className={`text-3xl font-extrabold ${textColor}`}>{title}</h2>
        <p className={`text-2xl font-semibold mt-2 ${textColor}`}>{subtitle}</p>
        <a
          href="#"
          className={`mt-3 text-xl inline-block font-semibold hover:border-b border-black ${textColor}`}
        >
          {linkText} →
        </a>
      </div>

      {/* Image Section */}
      <div className="flex gap-16 mt-6 pr-36 lg:mt-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${imageWidth} ${imageHeight} rounded-lg`}
          />
        ))}
      </div>
    </section>
  );
}

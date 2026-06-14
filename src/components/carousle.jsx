import { useState } from "react";

const items = [
  { img: "/images/cake.jpg", name: "Cake", price: "₹299", desc: "Fresh & Custom Cakes" },
  { img: "/images/burger.jpg", name: "Burger", price: "₹49", desc: "Loaded with cheese" },
  { img: "/images/sandwich.jpg", name: "Sandwich", price: "₹49", desc: "Fresh & crispy" },
  { img: "/images/pizza.jpg", name: "Pizza", price: "₹99", desc: "Cheesy & hot" },
  { img: "/images/cake1.jpg", name: "Cake", price: "₹199", desc: "Sweet & soft" },
];

const CurvedSlider = () => {
  const [active, setActive] = useState(2);
  const isMobile = window.innerWidth < 640;

  return (
    <div className="min-h-90vh bg-black-100 flex flex-col items-center justify-center overflow-hidden px-4"
    >
      
      {/* ✅ HEADING */}
      <div className="mb-10 text-center">
        <h1 className="pt-8 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#D4AF37] leading-tight">
          Happy To Serve You
        </h1>
        <p className="text-[#E6C65C] mt-2">
          Fresh • Tasty • Made with Love ❤️
        </p>
      </div>

      {/* ✅ SLIDER */}
      <div className="relative w-full max-w-6xl h-[60vh] flex items-center justify-center [perspective:1000px]">
        {items.map((item, i) => {
          const offset = i - active;

          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                transform: `
                  translateX(${offset * (isMobile ? 120 : 240)}px)
                  scale(${offset === 0 ? 1 : isMobile ? 0.9 : 0.85})
                  rotateY(${offset * (isMobile ? -15 : -25)}deg)
                `,
                zIndex: 20 - Math.abs(offset),
                opacity: Math.abs(offset) > (isMobile ? 2 : 3) ? 0 : 1,
              }}
              className="
                absolute group
                w-[220px] h-[300px]
                sm:w-[240px] sm:h-[340px]
                transition-all duration-700 ease-out
                cursor-pointer
              "
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  flex flex-col justify-end p-4
                "
              >
                <h3 className="text-white text-base sm:text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
                <span className="text-yellow-400 font-bold mt-1">
                  {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurvedSlider;

const CategoryStrip = () => {
  const items = [
    "Bakery Items",
    "Dairy Products",
    "Cold Drinks",
    "Ice Cream",
    "Fast Food",
    "Fresh Snacks",
    "Beverages",
  ];

  return (
    <section className="w-full overflow-hidden py-6">
      <div className="flex w-max animate-marquee-right gap-3">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="bg-[#F5E6B3] text-[#0F3B2E] px-4 py-2 rounded-md font-semibold whitespace-nowrap border border-[#C9A227]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CategoryStrip;
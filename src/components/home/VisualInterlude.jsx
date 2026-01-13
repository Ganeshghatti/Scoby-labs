const VisualInterlude = () => {
  return (
    <section className="h-[40vh] md:h-[50vh] relative overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-60" 
        style={{ backgroundImage: `url('/IMG_20250720_155756.jpg')` }} 
      />
      <div className="relative z-10 text-center px-4">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl italic text-white drop-shadow-lg">Chemistry of Taste</h2>
      </div>
    </section>
  );
};


export default VisualInterlude;
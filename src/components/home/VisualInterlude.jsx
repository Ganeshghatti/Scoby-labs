const VisualInterlude = () => {
  return (
    <section className="h-[40vh] md:h-[50vh] relative overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-60" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000')` }} 
      />
      <div className="relative z-10 text-center px-4">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl italic text-white drop-shadow-lg">Chemistry of Taste</h2>
      </div>
    </section>
  );
};


export default VisualInterlude;
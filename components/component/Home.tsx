export default function Homepage() {
  return (
    <main className="relative w-full h-screen flex items-center bg-[#fdfbf7] overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="z-10 space-y-6 animate-fade-in">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
            New Season Arrival
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-900 leading-tight">
            The Art of <br /> 
            <span className="italic font-normal">Living Well</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            Discover our curated collection of sustainable essentials designed to bring balance and beauty to your everyday routine.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-all duration-300">
              Shop Collection
            </button>
            <button className="px-8 py-4 border border-slate-900 text-slate-900 font-medium rounded-sm hover:bg-slate-50 transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="relative h-[600px] w-full hidden lg:block">
          {/* Decorative background shape */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          
          {/* Main Image Container */}
          <div className="relative z-10 w-full h-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <img 
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" 
              alt="Featured Fashion" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Small Floating "Badge" */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-lg z-20 hidden xl:block">
            <p className="text-slate-400 text-xs font-bold uppercase">Trusted By</p>
            <p className="text-slate-900 font-serif text-xl">10k+ Customers</p>
          </div>
        </div>

      </div>
    </main>
  );
}
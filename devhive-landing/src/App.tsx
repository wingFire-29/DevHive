import { Calendar, Image as ImageIcon, Users, Zap, Brain, Rocket, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Floating Tags */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-tag absolute top-40 left-10 bg-gradient-to-r from-purple-700 to-gray-700 px-3 py-1 rounded-full text-sm font-medium animate-float-1">
          C++
        </div>
        <div className="floating-tag absolute top-60 right-20 bg-gradient-to-r from-blue-700 to-cyan-700 px-3 py-1 rounded-full text-sm font-medium animate-float-2">
          DSA
        </div>
        <div className="floating-tag absolute top-60 left-60 bg-gradient-to-r from-blue-700 to-purple-700 px-3 py-1 rounded-full text-sm font-medium animate-float-3">
          C
        </div>
        <div className="floating-tag absolute bottom-40 right-1/4 bg-gradient-to-r from-green-700 to-emerald-700 px-3 py-1 rounded-full text-sm font-medium animate-float-4">
          Python
        </div>
        <div className="floating-tag absolute bottom-20 left-20 bg-gradient-to-r from-yellow-700 to-orange-700 px-3 py-1 rounded-full text-sm font-medium animate-float-5">
          JavaScript
        </div>
        <div className="floating-tag absolute top-1/2 right-10 bg-gradient-to-r from-indigo-700 to-purple-700 px-3 py-1 rounded-full text-sm font-medium animate-float-6">
          AI/ML
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 backdrop-blur-sm ">
        <div className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-to-r from-black to-black rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
          <img src="/logo.png" alt="DevHive" className="w-12 h-12" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            DevHive Club
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Events', 'Gallery'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* 3D Cards Container */}
          <div className="relative perspective-1000 mb-12">
            <div className="relative transform-gpu preserve-3d">
              {/* Main Card */}
              <div className="card-3d bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transform hover:rotateY-5 hover:rotateX-5 transition-transform duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                  Welcome to<br />
                  <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text">
                    DevHive Club
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Where developers gather, learn, and build amazing things together
                </p>

                {/* Action Icons */}
                <div className="flex items-center justify-center space-x-6">
                  {[
                    { icon: Users, label: 'Community' },
                    { icon: Zap, label: 'Innovation' },
                    { icon: Rocket, label: 'Growth' },
                    { icon: Star, label: 'Excellence' }
                  ].map(({ icon: Icon, label }, index) => (
                    <div
                      key={label}
                      className={`group cursor-pointer transform hover:scale-110 transition-all duration-300 animate-bounce-delayed-${index + 1}`}
                    >
                      <div className="p-3 bg-gradient-to-r from-purple-700/20 to-blue-700/20 rounded-xl border border-white/10 backdrop-blur-sm group-hover:from-purple-700/40 group-hover:to-blue-700/40 transition-all duration-300">
                        <Icon className="w-6 h-6 text-purple-500 group-hover:text-gray-200 transition-colors duration-300" />
                      </div>
                      <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Side Cards */}
              <div className="absolute -left-20 top-10 w-32 h-20 bg-gradient-to-r from-purple-700/10 to-pink-700/10 backdrop-blur-sm border border-white/5 rounded-xl transform rotateY-20 rotateX-10 hover:rotateY-25 transition-transform duration-500 hidden lg:block">
                <div className="flex items-center justify-center h-full">
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              
              <div className="absolute -right-20 bottom-10 w-32 h-20 bg-gradient-to-r from-blue-700/10 to-cyan-700/10 backdrop-blur-sm border border-white/5 rounded-xl transform rotateY--20 rotateX--10 hover:rotateY--25 transition-transform duration-500 hidden lg:block">
                <div className="flex items-center justify-center h-full">
                  <ImageIcon className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10">Explore Events</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow-delay"></div>
      </div>
    </div>
  );
}

export default App;

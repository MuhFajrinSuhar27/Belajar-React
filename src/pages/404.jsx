import { useRouteError} from "react-router-dom"
const ErroPage = () => {
    const error = useRouteError();
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-[#121212] text-center overflow-hidden">
      {/* Particles background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="absolute w-2 h-2 bg-[#ff6b6b] rounded-full opacity-40 animate-float" style={{ left: '10%' }}></div>
        <div className="absolute w-3 h-3 bg-[#7a89ff] rounded-full animate-float" style={{ left: '20%' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-[#65e6f7] rounded-full animate-float" style={{ left: '30%' }}></div>
        <div className="absolute w-2.5 h-2.5 bg-[#ffcc00] rounded-full animate-float" style={{ left: '40%' }}></div>
        <div className="absolute w-2 h-2 bg-[#ff6b6b] rounded-full opacity-40 animate-float" style={{ left: '50%' }}></div>
        <div className="absolute w-3 h-3 bg-[#7a89ff] rounded-full animate-float" style={{ left: '60%' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-[#65e6f7] rounded-full animate-float" style={{ left: '70%' }}></div>
        <div className="absolute w-2.5 h-2.5 bg-[#ffcc00] rounded-full animate-float" style={{ left: '80%' }}></div>
        <div className="absolute w-2 h-2 bg-[#ff6b6b] rounded-full opacity-40 animate-float" style={{ left: '90%' }}></div>
      </div>

      {/* Mini floating ghosts */}
      <div className="absolute text-2xl text-white opacity-40 animate-fly-around" style={{ top: '10%', left: '15%' }}>👻</div>
      <div className="absolute text-2xl text-white opacity-40 animate-fly-around" style={{ top: '80%', left: '85%' }}>👻</div>
      <div className="absolute text-2xl text-white opacity-40 animate-fly-around" style={{ top: '80%', left: '85%' }}>👻</div>
      <div className="absolute text-2xl text-white opacity-40 animate-fly-around" style={{ top: '30%', left: '80%' }}>👽</div>
 
      <main className="z-10 w-full max-w-[900px] px-5">
        <div id="image" className="relative mb-8">
          <img src="/img/img.svg" alt="404 Error Ghost" className="max-w-[300px] mx-auto filter drop-shadow-xl animate-float-image" />
          <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 flex gap-10">
            <div className="w-4 h-4 bg-[#121212] rounded-full animate-blink"></div>
            <div className="w-4 h-4 bg-[#121212] rounded-full animate-blink"></div>
          </div>
        </div>
        <div id="heading" className="text-6xl font-bold text-[#ff6b6b] mb-5 text-shadow-glow animate-glow">Boo! Page Missing!</div>
        <div id="subheading" className="text-lg text-[#e0e0e0] my-5 font-light max-w-[600px] mx-auto leading-6"></div>
      </main>

      <footer className="mt-12 text-[#777]">
        <a href="https://en.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer" className="text-[#7a89ff] text-lg transition-all duration-300 ease-in-out flex items-center gap-2 hover:text-[#ff6b6b]">
          <i className="fas fa-question-circle"></i> What does 404 mean?
        </a>
      </footer>
    </div>
    )
}

export default ErroPage;
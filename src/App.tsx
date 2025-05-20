import "./App.css";
import meImage from './assets/Me.jpg'
function App() {
  return (
    <>
      {/* NAV */}
      <div className="flex m-5">
        {/* Left */}
        <div className="w-full">
          <p>Mange Jay</p>
        </div>
        {/* Left */}

        {/* Right */}
        <div className="flex w-full space-x-7 justify-end">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Projects</div>
        </div>
        {/* Right */}
      </div>
      {/* NAV */}

      {/* Name */}
      <div className="flex">

        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-8xl mb-3">
            <p className="open-sans-nam lobster-two-bold ancizar-serif-name name-typing-effect">Mange Jay</p>
          </div>
          <div>
            "I build digital experiences from pixel to database — <br />A full stack developer who turns ideas into working code."
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <img src={meImage} alt="Myself" className="h-96 w-max" />
        </div>
      </div>
      {/* Name */}
    </>
  );
}

export default App;

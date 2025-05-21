import "./App.css";
import meImage from "./assets/Me.jpg";
function App() {
  let slider_content = [
    'https://cdn-icons-png.flaticon.com/512/4257/4257483.png',
    'https://icons.veryicon.com/png/o/miscellaneous/streamline/database-39.png',
    'https://cdn-icons-png.flaticon.com/512/1/1781.png',
    'https://cdn-icons-png.freepik.com/512/5968/5968509.png',
    'https://img.icons8.com/m_rounded/512/android-os.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Git-icon-black.svg/2048px-Git-icon-black.svg.png',
    'https://cdn-icons-png.flaticon.com/512/3501/3501060.png',
    'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/btc-4n588zbb132ub9gf9c6x7j.png/btc-ubia43gsjss49m7rnitl.png?_a=DATAdtAAZAA0',
    'https://cdn-icons-png.flaticon.com/512/15/15476.png'
    ];
  return (
    <div className="m-5 space-y-5">
      {/* NAV */}
      <div className="flex bg-gray-800 p-3 text-white opacity-95">
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
      <div className="flex h-full my-6">
        {/* Text */}
        <div className="flex flex-col justify-center items-center w-full  ">
          <div className="text-8xl mb-3">
            <p className="open-sans-nam lobster-two-bold ancizar-serif-name name-typing-effect">
              Mange Jay
            </p>
          </div>
          <div>
            "I build digital experiences from pixel to database — <br />A full
            stack developer who turns ideas into working code."
          </div>
        </div>
        {/* Text */}

        {/* Iamge */}
        <div className="w-full flex items-center justify-center">
          <img src={meImage} alt="Myself" className="h-96 w-max" />
        </div>
        {/* Image */}
      </div>
      {/* Name */}

      {/* Slider */}
      <div className="marquee my-6">
        <div className="marquee-content">
          { slider_content.map((link, index) => (
            <img key={index} src={link} className="h-14 w-14 mx-8 inline-block" alt={`tech-icon-${index}`}/>
          ))
          }

          {
            slider_content.map((link, index) => (
              <img key={index} src={link} className="h-14 w-14 mx-8 inline-block" alt={`tech-icon-${index}`}/>
            ))
          }
        </div>
      </div>
      {/* Slider */}

      {/* Card */}
          
      {/* Card */}
    </div>
  );
}

export default App;

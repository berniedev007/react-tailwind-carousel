import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const slides = [
    // eslint-disable-next-line jsx-a11y/alt-text
    {id: 1, content: <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />},
    {id: 2, content: 'There'},
    {id: 3, content: 'Booya!'},
  ];
  const [active, setActive] = useState(1);

  // useEffect(() => {
  //   setTimeout(function(){
  //     nextSlide()
  //   }, 3000);
  // }, []);

  // function nextSlide(){
  //   setActive((active + 1) % 3);
  // }

  // function previousSlide(){
  //   setActive((active + 2) % 3);
  // }
  
  const slideClassnames = "absolute p-5 inset-0 w-full h-full bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform slide";
  const activeClassNames = slideClassnames + " opacity-100";
  const inactiveClassNames = slideClassnames + " opacity-0";

  return (
    <div className="max-w-xl m-auto border-dashed border-2 border-secondary p-7 mt-24">
      <div>
        <div className="relative h-72 border-solid border-2 border-secondary">
            {
              slides.map(slide => (
                <div className={active === slide.id? activeClassNames : inactiveClassNames} key={slide.id}>
                  {slide.content}
                </div>
              ))
            }                 
            {/* <div className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black" onClick={() => previousSlide()}>&#x276F;</div>
            <div className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black" onClick={() => nextSlide()}>&#x276E;</div> */}
        </div>
        <div className="flex h-3 w-full items-center justify-center mt-6">
          {
            slides.map(slide => (
              <div className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${active === slide.id ? "bg-primary" : "bg-secondary"}`} key={slide.id} onClick={() => setActive(slide.id)} />
            ))
          }            
        </div> 
      </div>
    </div>    
    
  );
}

export default App;

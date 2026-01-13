import { useEffect } from "react";

type ParallaxProps = {
  leftImage: string;
  rightImage: string;
};

const Parallax = ({ leftImage, rightImage }: ParallaxProps) => {
  let flowerStyle = {
    backgroundRepeat: "repeat-y",
    backgroundSize: "contain",
    position: "fixed",
    height: "100vh",
  };
  useEffect(() => {
    const handleScroll = () => {
      //Paralax lento
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element: any) => {
        const translateY = -scrollPosition / 10; // Ajusta la velocidad de paralaje según sea necesario
        element.style.backgroundPositionY = translateY + "px";
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="parallax"
        style={
          {
            ...flowerStyle,
            backgroundImage: `url("/common/${leftImage}")`,
          } as React.CSSProperties
        }
      ></div>
      <div
        className="parallax"
        style={
          {
            ...flowerStyle,
            backgroundImage: `url("/common/${rightImage}")`,
            right: "0",
          } as React.CSSProperties
        }
      ></div>
    </>
  );
};

export default Parallax;

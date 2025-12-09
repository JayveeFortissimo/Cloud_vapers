import { Button } from "../ui/Button";
import HeroImage from "../../assets/images/HeroImage.png";
import { BTN } from "@/lib/buttons";

const Hero = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <div className="container mx-auto p-4 min-h-[50rem] grid grid-cols-1 md:grid-cols-2 place-items-center">
      <section className="text-white w-full flex flex-col gap-5 justify-center items-center ">
        
        <div className="flex flex-col items-start gap-5 max-w-[30rem] md:max-w-[30rem] px-10 md:px-0">
          <h1 className="text-5xl md:text-5xl lg:text-6xl md:text-left leading-18 font-bold">
            {title}
          </h1>
          <p className="text-2xl font-oleo">{sub}</p>
          <div className="flex w-full gap-3">
            {BTN.map((pro) => (
              <Button
                key={pro.name}
                variant={pro.variant}
                className={pro.classname}
              >
                {pro.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <img src={HeroImage} alt="Content Image" className="h-auto w-[30rem]" />
    </div>
  );
};

export default Hero;

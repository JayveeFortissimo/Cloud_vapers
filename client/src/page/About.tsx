import Container from "@/components/common/Container";
import { aboutData } from "@/lib/aboutPage";

const About = () => {
  return (
    <Container>
      <div className="container mx-auto min-h-screen text-white flex flex-col gap-5 p-10">
       <p className="text-4xl font-bold">About VapeShop</p>
       <p className="text-xl">Your trusted source for premium vaping products</p>
        {aboutData.map((pro) => (
          <div key={pro.name} className="flex flex-col gap-5 border p-3 rounded cursor-pointer  transition duration-300 ease-in-out hover:scale-105">
            <h1 className="text-2xl font-bold font-oleo">{pro.name}</h1>
            <p>{pro.descriptions}</p>
            <div>
              {pro.orderlist?.map((pro,index) => (
                <div key={index} className="flex gap-2">
                  <p>{pro.chooseName}</p>
                  <p>{pro.descriptions}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default About;

import Container from "@/components/common/Container";
import { aboutData } from "@/lib/aboutPage";

const About = () => {
  return (
    <Container>
      <div className="container mx-auto min-h-screen text-white flex flex-col  gap-5 p-10">
        {aboutData.map((pro) => (
          <div key={pro.name} className="flex flex-col gap-5">
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

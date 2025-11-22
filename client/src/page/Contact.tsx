import Container from "@/components/common/Container";
import LogoImage from '@/assets/images/VapeIcon.png';
import ContactForm from "@/components/section/contact/contactForm";

const Contact = () => {
  return (
    <Container>
      <div className="min-h-[50rem] grid grid-cols-1  md:grid-cols-2 ">
		<div className="flex flex-col justify-center items-center gap-6">
             <img src={LogoImage} alt="Image Logo" />
			 <div className="flex flex-col gap-3 items-center">
				<h1 className="text-4xl text-white font-extrabold">May we help you?</h1>
				<p className="text-3xl text-white font-oleo">Please Contact us!</p>
			 </div>
		</div>
		<div className="w-full flex justify-center items-center">
           <ContactForm/>
		</div>
	  </div>
   
    </Container>
  );
};

export default Contact;

import Image from "@/assets/images/logo.png";
import { AuroraText } from "../ui/AuroraText";

export const Logo = () => (
	<div className="flex items-center">
		<img src={Image} alt="Vape logo" className="h-auto w-[3rem]" />
		<p className="font-bold text-lg">
			<AuroraText>CLOUD VAPERS </AuroraText>
		</p>
	</div>
);

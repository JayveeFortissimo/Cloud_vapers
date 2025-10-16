const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full max-w-[2100px] mx-auto bg-[url('@/assets/images/background.png')] bg-cover bg-center bg-no-repeat bg-[#111820] min-h-screen">
			{children}
		</div>
	);
};

export default Container;

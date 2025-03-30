import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-josefin",
});


export const metadata = {
	title: {
		template: "%s / The Wild Oasis",
		default: "The Wild Oasis",
	},
	// if you dont have description for the pages, this will become the default one.
	description:
		"Luxurious cabin hotel,located in the of the Italian Dolomites, surrounded by beautiful mountains and dark forest. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`bg-primary-900 ${josefin.className} text-blue-50  min-h-screen flex flex-col antialiased relative`}>
				<Header />
				<div className="flex-1 px-8 py-12 grid">
				<main className="max-w-7xl mx-auto w-full">{children}</main>
				</div>
			</body>
		</html>
	);
}

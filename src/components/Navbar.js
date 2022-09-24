import { useRef } from "react";



function Navbar() {
	const navRef = useRef();

	return (
		<header>
		
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">News</a>
				<a href="/#">Contact</a>
		

			</nav>
			
		</header>
	);
}

export default Navbar;
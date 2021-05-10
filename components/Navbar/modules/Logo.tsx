import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

const Logo: React.FC<{ props?: any, logoSrc?: string }> = ({ props, logoSrc }) => {
	return (
		<React.Fragment>
			<Box {...props}>
				<Image src={logoSrc}></Image>
				<Text fontSize="lg" fontWeight="large">
					Hackathon
				</Text>
			</Box>
		</React.Fragment>
	);
};

export default Logo;

import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			100: "#003049",
			200: "#D62828",
			300: "#F77F00",
			400: "#FCBF49",
			500: "#EAE2B7"
		}
	}
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;

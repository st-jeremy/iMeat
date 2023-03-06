import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return ( 
    <Box>
      <Navbar />
      <main>
        { children }
      </main>
      <Footer />
    </Box>
   );
}
 
export default Layout;
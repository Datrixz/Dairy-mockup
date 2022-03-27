import { Pixel as Phone } from "react-device-mockups";
import "html5-device-mockups/dist/device-mockups.min.css";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Comp from "./Comp";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>{matches?
      <Box
        className="App"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Phone width={300} data-orientation="potrait" color="black">
          <iframe
            title="showcase"
            src="https://pranju.netlify.app"
            style={{
              width: "100%",
              height: "100%",
              margin: 0,
              pointerEvents: "auto",
            }}
          />
        </Phone>
      </Box>:<Comp/>}
    </>
  );
}

export default App;

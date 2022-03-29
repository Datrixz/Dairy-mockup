import { Pixel as Phone } from "react-device-mockups";
import "html5-device-mockups/dist/device-mockups.min.css";
import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  // // if(matches){
  // //   window.location.assign('https://apnadairy.netlify.app')
  // // }
  return (
    <>
      <Box
        className="App"
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Phone width={350} data-orientation="potrait" color="black">
          <iframe
            title="showcase"
            src="https://www.figma.com/proto/GGu9sKKodfqIKKbFwawR5Z?node-id=0%3A1"
            style={{
              width: "100%",
              height: "100%",
              margin: 0,
              pointerEvents: "auto",
            }}
          />
        </Phone>
      </Box>
    </>
  );
}

export default App;

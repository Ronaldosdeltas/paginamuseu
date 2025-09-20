import { Box } from "@mui/material";
import { styled } from "@mui/system";

const AnimatedBackground = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "url('https://ak3.picdn.net/shutterstock/videos/17646403/thumb/1.jpg') top left",
  backgroundSize: "cover",
  animation: "animatedBackground 6s linear infinite",
  zIndex: -1,

  "@keyframes animatedBackground": {
    from: { backgroundPosition: "0 0" },
    to: { backgroundPosition: "0 100%" },
}});

const MatrixBackground = () => {
  return <AnimatedBackground />;
};

export default MatrixBackground;

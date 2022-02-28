import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  mapContainer: {
    marginTop: "10px",
    height: "85vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
}));

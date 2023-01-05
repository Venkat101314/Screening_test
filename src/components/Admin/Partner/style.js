import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  partnerTitle: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontFamily: "Fira Sans",
      fontWeight: 600,
      letterSpacing: "0.7px",
    },
  },
  addButton: {
    "&.MuiButton-root": {
      borderRadius: "22px",
      lineHeight: "1rem",
      paddingBlock: "10px",
    },
  },
  dialogBox: {
    "&.MuiDialog-root": {
      position: "absolute",
      top: "28%",
      bottom: "23%",
      left: "20%",
      right: "20%",
      // transform: "translate(-50%, -50%)",
    },
    '&.MuiDialog-paper':{
    }
  },
  dialogBoxTitle: {
    "&.MuiDialogTitle-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 12px",
      backgroundColor: "#1976d2",
      color: "white",
    },
  },
  dialogBoxContent:{
    '&.MuiDialogContent-root':{
      padding: '12px 12px'
    }
  },
}));

export default useStyle;
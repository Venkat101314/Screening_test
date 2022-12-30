import { makeStyles } from "@mui/styles";
import "../styles.css";
const useStyle = makeStyles((theme) => ({
  orderMain: {
    "&.MuiGrid-container": {
      width: "100%",
      height: "90vh",
    },
  },
  orderLogo: {
    "&.MuiGrid-root": {
      width: "100%",
      height: "7%",
      backgroundColor: "green",
    },
  },
  orderSearch: {
    "&.MuiGrid-root": {
      width: "100%",
      height: "8%",
      backgroundColor: "yellow",
    },
  },
  orderList: {
    "&.MuiGrid-root": {
      width: "100%",
      height: "85%",
      overflowY: "scroll",
      scrollBehavior: "smooth",
      textDecoration: "none",
      listStyleType: "none",
    },
  },
  orderData: {
    "&.MuiGrid-container": {
      width: "100%",
      height: "fit-content",
      backgroundColor: "white",
      padding: "10px",
      marginBottom: "5px",
      borderBottom: "1px solid gray",
    },
  },
  orderTime: {
    "&.MuiGrid-root": {
      color: "gray",
      fontSize: "12px",
      textAlign: "right",
    },
  },
  searchField:{
    '&.MuiTextField-root':{
        width:'100%',
        height:'8vh'
    }
  },
}));

export default useStyle;

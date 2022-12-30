import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  tableContainer: {
    "&.MuiTableContainer-root": {
      width: "100%",
      marginTop: "5px",
    },
  },
  tableHeader: {
    "&.MuiTableHead-root": {
      backgroundColor: "#CFEE9E",
    },
  },
  tableBody: {
    
    backgroundColor: "#EDF7DH",
    height: "46vh",
    overflowY: "scroll",
    scrollBehaviour: "smooth",
    // "&.MuiTableBody-root": {
    //   backgroundColor: "#EDF7DH",
    //   height: "46vh",
    //   overflowY: "scroll",
    //   scrollBehaviour: "smooth",
    // },
  },
  tableRow: {
    "&.MuiTableRow-root": {
      fontWeight: 700,
      height: "10px",
      paddingBlock: "-5px",
      backgroundColor: "#EDF7DH",
    },
  },
  contentCell: {
    "&.MuiTableCell-root": {
      fontSize: "16px",
      fontWeight: 600,
    },
  },
  tableFooter: {
    "&.MuiTableFooter-root": {
      backgroundColor: "#EDF7DE",
      height: "25vh",
    },
  },
  // #DFF7B9
}));

export default useStyle;

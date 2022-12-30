import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  gridContainer: {
    "&.MuiGrid-container": {
      width: "100%",
      height: "100vh",
    },
  },
  gridHeader:{
    '&.MuiGrid-root':{
      width:'100%',
      height:'10vh',
    }
  },
  gridDashboard:{
    '&.MuiGrid-root':{
      width:'100%',
      height:"90vh",
    }
  }
}))

export default useStyle
// .MuiGrid-root .MuiGrid-container

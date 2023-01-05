import {makeStyles} from "@mui/styles"

const useStyle = makeStyles((theme)=>(
{
orderGrid:{
'&.MuiGrid-root':{
    width:'100%',
    height:'90vh',
    padding:"3px",    
  borderRadius: '4px',
  boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
}
},
tableGrid:{
   '&.MuiGrid-root':{
     width:'100%',
    height:'90vh',
    padding:"3px",
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
   }
},
widgetsGrid: {
    '&.MuiGrid-root':{
     width:'100%',
    height:'90vh',
    padding:"3px",
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
   }
},
}
));

export default useStyle
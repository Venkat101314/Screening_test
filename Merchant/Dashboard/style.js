import {makeStyles} from "@mui/styles"

const useStyle = makeStyles((theme)=>(
{
orderGrid:{
'&.MuiGrid-root':{
    width:'100%',
    height:'100%',
}
},
tableGrid:{
   '&.MuiGrid-root':{
     width:'100%',
    height:'100%',
    backgroundColor:'yellow'
   }
},
widgetsGrid: {
    '&.MuiGrid-root':{
     width:'100%',
    height:'100%',
    backgroundColor:'green'
   }
},
}
));

export default useStyle
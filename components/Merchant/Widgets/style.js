import {makeStyles} from "@mui/styles"

const useStyle = makeStyles((theme)=>(
{
swiggy:{
    '&.MuiAccordion-root':{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        fontfamily: "Hind Madurai",
        backgroundColor:'white',
        color:'#fc8019',
        marginBottom:'4px'
    },  
},
title:{
    '&.MuiTypography-root':{
        fontWeight: 600,
    }
},
orderList:{
    '&.MuiGrid-root':{
        listStyleType: "none",
        fontSize:'16px',
    }
},
accordionDetails:{
    '&.MuiAccordionDetails-root':{
        marginTop:'-20px'
    }
},
zomato:{
    '&.MuiAccordion-root':{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        fontfamily: "Hind Madurai",
        backgroundColor:'#ef4f5f',
        color:'white',
         marginBottom:'4px'
    }, 
},
dunzo:{
    '&.MuiAccordion-root':{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        fontfamily: "Hind Madurai",
        backgroundColor:'blue',
        color:'#00ffa4',
        marginBottom:'4px'
    }, 
},
bbasket:{
    '&.MuiAccordion-root':{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        fontfamily: "Hind Madurai",
        backgroundColor:'#84c225',
        color:'black',
        marginBottom:'4px'
    }, 
},
mygrozo:{
    '&.MuiAccordion-root':{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        fontfamily: "Hind Madurai",
        backgroundColor:'white',
        color:'black',
        marginBottom:'4px'
    }, 
},
grobux:{
    '&.MuiAccordion-root':{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        fontfamily: "Hind Madurai",
        backgroundColor:'#4f1812',
        color:'white',
    }, 
},

}
));

export default useStyle


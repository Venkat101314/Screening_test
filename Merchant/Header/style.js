import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    headerMain:{
     '&.MuiGrid-root':{
        backgroundColor:'#1976d2',
        color:"#ffff",
        padding:'5px',
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between',
        paddingInline:'10px'
     }
    },
    logo:{
      '&.MuiAvatar-root':{
        width:'55px',
        height:'auto'
      }
    },
    Headertxt:{
    '&.MuiTypography-root':{
       fontFamily:'Fira Sans',
       fontSize:'20px',
       fontWeight:'550',
       marginInlineStart:'10px'
     }
    },
    HeaderSubtxt:{
    '&.MuiTypography-root':{
       fontFamily:'Fira Sans',
       color:'#ffff',
       fontSize:'16px',
       fontWeight:'350',
         marginInlineStart:'10px'
      }  
    },
    Headerlogout:{
    '&.MuiAvatar-root':{
            width:'45px',
            height:'auto',
            cursor:'pointer',
            marginInlineStart:'10px'
          } 
    }
}))

export default useStyle
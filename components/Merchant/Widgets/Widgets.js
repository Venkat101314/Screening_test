import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";
import * as React from "react";
import "../styles.css";
import useStyle from "./style";


export default function Widgets() {
  const classes = useStyle();
const Logo = styled('img')(
  {
    width: '70px',
    height: '30px',
  }
)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{
      height:'89.5vh',
      overflowY:'scroll',
      scrollBehavior:'smooth'
    }}>  
      
      <Accordion
      className={classes.grobux}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
         <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}

          <Grid container justifyContent={"space-between"} alignItems={'center'}>
            <Typography variant="h6" className={classes.title}>Grobux</Typography>
            <Typography variant='h7' className={classes.title}>Total Orders 5</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={6}className={classes.orderList}>

                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
            </Grid>
            <Grid item xs={6} textAlign={'right'} className={classes.orderList}>

                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
      className={classes.mygrozo}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
         <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}

          <Grid container justifyContent={"space-between"} alignItems={'center'}>
            <Typography variant="h6" className={classes.title}>MyGrozo</Typography>
            <Typography variant='h7' className={classes.title}>Total Orders 5</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={6} className={classes.orderList}>

                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
            </Grid>
            <Grid item xs={6} textAlign={'right'} className={classes.orderList}>

                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
      className={classes.dunzo}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
         <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}

          <Grid container justifyContent={"space-between"} alignItems={'center'}>
            <Typography variant="h6" className={classes.title}>Dunzo</Typography>
            <Typography variant='h7' className={classes.title}>Total Orders 5</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={6} className={classes.orderList}>

                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
            </Grid>
            <Grid item xs={6} textAlign={'right'} className={classes.orderList}>

                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
      className={classes.swiggy}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}

          <Grid container justifyContent={"space-between"} alignItems={'center'}>
            <Typography variant="h6" className={classes.title}>Swiggy</Typography>
            <Typography variant='h7' className={classes.title}>Total Orders 5</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={6} className={classes.orderList}>

                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
            </Grid>
            <Grid item xs={6} textAlign={'right'} className={classes.orderList}>

                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
      className={classes.zomato}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}

          <Grid container justifyContent={"space-between"} alignItems={'center'}>
            <Typography variant="h6" className={classes.title}>Zomato</Typography>
            <Typography variant='h7' className={classes.title}>Total Orders 5</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={6} className={classes.orderList}>

                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
            </Grid>
            <Grid item xs={6} textAlign={'right'} className={classes.orderList}>

                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
      className={classes.bbasket}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
       <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <img src={'https://www.mygrozo.com/uploads/xlogo.png.pagespeed.ic.cOKuDm6vc7.webp'}></img> */}

          <Grid container justifyContent={"space-between"} alignItems={'center'}>
           <Typography variant='h7' className={classes.title}>BigBasket</Typography>
            <Typography variant='h7' className={classes.title}>Total Orders 5</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={6} className={classes.orderList}>

                <li>New Order</li>
                <li>Process Order</li>
                <li>Dispatched</li>
                <li>Incomplete</li>
                <li>Cancelled Order</li>
            </Grid>
            <Grid item xs={6} textAlign={'right'} className={classes.orderList}>

                <li>3</li>
                <li>2</li>
                <li>10</li>
                <li>5</li>
                <li>1</li>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

     
    
    </div>
  );
}

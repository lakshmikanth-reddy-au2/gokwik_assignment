import { Grid } from "@material-ui/core";
import React from "react";
import Form from "./Form";
import {icons} from '../icons/icons';
export default function Content() {
    console.log(icons)
  return (
    <div className={localStorage.getItem("giftAvailed") ? "main-content-wid" : "main-content"}>
      {localStorage.getItem("giftAvailed") ? (
        <div>
          <Grid container spacing={4}>
            <Grid className="grid-item" item xs={12} md={6}>
              <p>Where will I get the gift card?</p>
              <Grid container className="grid-right">
                <Grid item xs={3} className="icn">{icons["whatsapp"]}</Grid>
                <Grid item xs={9} className="grid-right-text" >You will recieve it on Whatsapp/SMS on your mobile.</Grid>
                
              </Grid>
            </Grid>
            <Grid className="grid-item" item xs={12} md={6}>
            <p>When will i receive the gift card?</p>
              <Grid container className="grid-right">
                <Grid item xs={3} className="icn">{icons["notes"]}</Grid>
                <Grid item xs={9} className="grid-right-text" >With in 48 hours, when your Go Kwik order is delivered.</Grid>
                
              </Grid>
            </Grid>
            <Grid className="grid-item" item xs={12} md={6}>
            <p>What if I cancel the order?</p>
              <Grid container className="grid-right">
                <Grid item xs={3} className="icn">{icons["cancel"]}</Grid>
                <Grid item xs={9} className="grid-right-text" >The voucher will not delivered if you cancel the order</Grid>
                
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <>
          <div className="mgs-text">
            You have WON Paytm Gift Card of Rs 200 for{" "}
            <span>placing the order on GoKwik</span>
          </div>
          <div className="form-matter">
            <Form />
          </div>
        </>
      )}
    </div>
  );
}

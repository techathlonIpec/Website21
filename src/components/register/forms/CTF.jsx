import React, { useState } from 'react'
import classes from "../register.module.scss";
import done from './done.png'


export default function CTF() {
   return (
      <div className={classes.outer}>
      <div className={classes.box}>
          <img className={classes.image} src={done} alt="registration closed" />
      </div>
      </div>
   );
}

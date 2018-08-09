import * as React from 'react';
import {faIcon} from "dyna-showcase";

const styles = require('./index.module.less');

export const Logo= ()=>(
  <div className={styles.container}>
    <div className={styles.logo}>
      {faIcon('cubes')}
    </div>
    <div className={styles.texts}>
      <div className={styles.line1}>dyna ui</div>
      <div className={styles.line2}>star rating</div>
    </div>
  </div>

);

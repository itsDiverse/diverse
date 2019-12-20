import React from "react"
import style from "../../styles/quadBox.module.css"
export default () =>
<>
<div className={style.contentContainer}>
    <div style={{textAlign: `center`}}>
        <h2>Seamless integrations with finance software</h2>
        <h3>Automatically import transactions to your expense management and accounting software with our out-of-the-box integrations.</h3>
    </div>

    <div className={style.quadBoxContainer}>
        <div className={style.quadBox}>
            <div className={style.quadBoxLeft}>

            </div>
            
            <div className={style.quadBoxText}> 
                <h1>Expensify</h1>
                <p>An application for expense management, receipt scanning, and business travel.</p>
            </div>
        
        </div>
    </div>
    
</div>
</>
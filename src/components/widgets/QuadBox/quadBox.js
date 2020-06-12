import React from "react"
import style from "../../styles/quadBox.module.css"

export default (props) =>
<>
<div className={style.wrapper}>
    <div className={style.contentContainer}>
        <div className={style.headerBox}>
            <img src={props.headingImage} alt="Diverse Company Logo" width="60px" />
            <h2 className={style.heading}>{props.heading}</h2>
            <h3 className={style.heading}>{props.blurb}</h3>
        </div>

        <div className={style.quadBoxContainer} style={{gridTemplateRows: props.boxHeight}}>
            <div className={style.quadBox}>
                <div className={style.quadBoxLeft}>
                    <span className={style.quadBoxLeftSkew} style={{backgroundColor: props.box1Color}} ></span>
                    <span className={style.imageContainer}><img src={props.image1} alt="Diverse Company Logo"/></span>
                </div>
                
                <div className={style.quadBoxText}> 
                    <h1>{props.box1title}</h1>
                    <p>{props.box1blurb}</p>
                </div>
            
            </div>

            <div className={style.quadBox}>
                <div className={style.quadBoxLeft}>
                <span className={style.quadBoxLeftSkew} style={{backgroundColor: props.box2Color}} ></span>
                <span className={style.imageContainer}><img src={props.image2} alt="Diverse Company Logo"/></span>
                </div>
                
                <div className={style.quadBoxText}> 
                    <h1>{props.box2title}</h1>
                    <p>{props.box2blurb}</p>
                </div>
            
            </div>

            <div className={style.quadBox}>
                <div className={style.quadBoxLeft}>
                    <span className={style.quadBoxLeftSkew} style={{backgroundColor: props.box3Color}} ></span>
                    <span className={style.imageContainer}><img src={props.image3} alt="Diverse Company Logo"/></span>
                </div>
                
                <div className={style.quadBoxText}> 
                    <h1>{props.box3title}</h1>
                    <p>{props.box3blurb}</p>
                </div>
            
            </div>

            <div className={style.quadBox}>
                <div className={style.quadBoxLeft}>
                <span className={style.quadBoxLeftSkew} style={{backgroundColor: props.box4Color}} ></span>
                    <span className={style.imageContainer}><img src={props.image4} alt="Diverse Company Logo"/></span>
                </div>
                
                <div className={style.quadBoxText}> 
                    <h1>{props.box4title}</h1>
                    <p>{props.box4blurb}</p>
                </div>
            
            </div>
        </div>

    </div>
</div>
</>
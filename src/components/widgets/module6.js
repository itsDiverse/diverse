import React from "react"
import style from "../../styles/module6.module.css"

export default (props) =>
<>
	<div className={'contentWrapper'}>
		<div className={style.processSection}>
			<div className={'containerLg'}>
				<div className={style.processContentSection}>
					<div className={style.processContentTitle}>
						<h2 className={style.sectionTitle}>{props.heading}</h2>
						<p className={style.sectionDesc}>{props.text}</p>
					</div>
				</div>
				<ul className={style.timeline}>
			        <li className={style.line}></li>
			        <li className={style.timelineStep}>
			          <div className={style.iconContainer} style={{ backgroundImage: `url(${props.image1})` }}>
			            <figure className={style.icon} style={{ backgroundImage:`url(${props.image1})` }}></figure>
			          </div>
			          <p>{props.step1text}<br /><span className={style.stepNo} style={{ backgroundColor: props.step1color }}>Step 1</span></p>
			        </li>
			        <li className={style.timelineStep} >
			          <div className={style.iconContainer}>
			            <figure className={style.icon} style={{ backgroundImage:`url(${props.image2})` }}></figure>
			          </div>
			          <p>{props.step2text}<br /><span className={style.stepNo} style={{ backgroundColor: props.step2color }}>Step 2</span></p>
			        </li>
			        <li className={style.timelineStep}>
			          <div className={style.iconContainer} style={{ backgroundImage:`url(${props.image3})` }}>
			            <figure className={style.icon} style={{ backgroundImage:`url(${props.image3})` }}></figure>
			          </div>
			          <p>
			            {props.step3text}
			            <br />
			            <span className={style.stepNo} style={{ backgroundColor: props.step3color }}>Step 3</span>
			          </p>
			        </li>
			        <li className={style.timelineStep}>
			          <div className={style.iconContainer } style={{ backgroundImage:`url(${props.image4})` }}>
			            <figure className={style.icon} style={{ backgroundImage:`url(${props.image4})` }}></figure>
			          </div>
			          <p>{props.step4text}<br /><span className={style.stepNo} style={{ backgroundColor: props.step4color }}>Step 4</span></p>
			        </li>
			      </ul>
			</div>
		</div>
	</div>
    </>
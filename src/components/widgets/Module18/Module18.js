import React from "react"
import style from "./Module18.module.css"

export default (props) =>
<>
	<div className={style.contentWrapper}>
		<div className={style.regulatoryComplianceSection}>
			<div className={'containerLg'}>
				<div className={style.regulatoryComplianceTitle}>
					<span>
						<img src={props.icon} />
					</span>
					<h2>{props.title}</h2>
				</div>
				<div className={style.regulatoryComplianceChecklist}>
					<div className={[style.checkList, style.checklistLeft].join(' ')}>
						<h3>{props.column1text}</h3>
						<ul>
							<li style={{ display: props.display1 }}><span><img src={props.checkbox} /></span><span>{props.text1}</span></li>
							<li style={{ display: props.display2 }}><span><img src={props.checkbox} /></span><span>{props.text2}</span></li>
							<li style={{ display: props.display3 }}><span><img src={props.checkbox} /></span><span>{props.text3}</span></li>
							<li style={{ display: props.display4 }}><span><img src={props.checkbox} /></span><span>{props.text4}</span></li>
							<li style={{ display: props.display5 }}><span><img src={props.checkbox} /></span><span>{props.text5}</span></li>
						</ul>
					</div>
					<div className={[style.checkList, style.checklistRight].join(' ')}>
						<h3>{props.column2text}</h3>
						<ul>
							<li style={{ display: props.display6 }}><span><img src={props.checkbox} /></span><span>{props.text6}</span></li>
							<li style={{ display: props.display7 }}><span><img src={props.checkbox} /></span><span>{props.text7}</span></li>
							<li style={{ display: props.display8 }}><span><img src={props.checkbox} /></span><span>{props.text8}</span></li>
							<li style={{ display: props.display9 }}><span><img src={props.checkbox} /></span><span>{props.text9}</span></li>
							<li style={{ display: props.display10 }}><span><img src={props.checkbox} /></span><span>{props.text10}</span></li>
							<li style={{ display: props.display11 }}><span><img src={props.checkbox} /></span><span>{props.text11}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
import React from "react"
import style from "../../styles/module1.module.css"

export default (props) =>
<>

	<div className={style.contentWrapper}>
		<section className={[style.stylecontainerLg, style.logoSection].join(' ')}>
			<ul>
		      <li className={style.logo1}>
		        <img src={props.image1} alt={props.image1alt} />
		      </li>
		      <li className={style.logo2}>
		        <img src={props.image2} alt={props.image2alt} />
		      </li>
		      <li className={style.logo3}>
		        <img src={props.image3} alt={props.image3alt} />
		      </li>
		      <li className={style.logo4}>
		        <img src={props.image4} alt={props.image4alt} />
		      </li>
		      <li className={style.logo5}>
		        <img src={props.image5} alt={props.image5alt} />
		      </li>
		      <li className={style.logo6}>
		        <img src={props.image6} alt={props.image6alt} />
		      </li>
		      <li className={style.logo7}>
		        <img src={props.image7} alt={props.image7alt} />
		      </li>
		  	</ul>
		</section>
	</div>
</>
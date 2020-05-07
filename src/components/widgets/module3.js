import React from "react"
import style from "../../styles/module3.module.css"
import layoutStyle from "../../styles/layout.module.css"

export default (props) =>
    <>

<div className={layoutStyle.contentWrapper}>
		<section className={layoutStyle.containerLg}>
			<div className={style.corporateCardSection}>
				<div className={style.corporateCardColumn}>
					<div className={style.corporateCardIcon}>
						<img src={props.image1} alt={props.image1alt} />
					</div>
					<div className={style.corporateCardContent}>
						<h3>{props.title1}</h3>
						<p>{props.text1}</p>
					</div>
				</div>
				<div className={style.corporateCardColumn}>
                <div className={style.corporateCardIcon}>
					<img src={props.image2} alt={props.image2alt}/>
				</div>
					<div className={style.corporateCardContent}>
						<h3>{props.title2}</h3>
						<p>{props.text2}</p>
					</div>
				</div>
				<div className={style.corporateCardColumn}>
                <div className={style.corporateCardIcon}>
					<img src={props.image2} alt={props.image2alt}/>
				</div>
					<div className={style.corporateCardContent}>
						<h3>{props.title3}</h3>
						<p>{props.text3}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</>
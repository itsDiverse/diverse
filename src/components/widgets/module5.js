import React from "react"
import style from "../../styles/module5.module.css"
import layoutStyle from "../../styles/layout.module.css"

export default (props) =>
<>
<div className={layoutStyle.contentWrapper}>
		<div className={style.footerWithCardSectionWrapper}> 
		<section className={style.footerWithCardSection}>
				<div className={style.containerXl}>
					<div className={style.footerCards}>
						<div className={style.footerCardsWrapper}>
							<a href="#">
							<span className={style.footerCardsIcon}>
							<img src={props.image1} alt={props.image1alt} />
                            </span>
							<h3 className={style.linkArrow}>{props.box1title}</h3>
							<p>{props.box1text}</p>
							</a>
						</div>
						<div className={style.footerCardsWrapper}>
							<a href="#">
							<span className={style.footerCardsIcon}>
							<img src={props.image2} alt={props.image2alt} />
                            </span>
							<h3 className={style.linkArrow} >{props.box2title}</h3>
							<p>{props.box2text}</p>
							</a>
						</div>
					</div>
				</div>
		</section>
		<section className={style.getInTouchSection}>
			<div className={layoutStyle.containerLg}>
				<div className={style.getInTouchContentWrapper}>
					<div className={style.getInTouchContent}>
						<h2>{props.title}</h2>
						<h3>{props.text}</h3>

					</div>
					<div className={style.getInTouchBtn}>
						<a className={style.btnLeft, style.btnDefault} style={{ color: props.button1textColor, backgroundColor: props.button1color }} href="#">{props.button1title}</a>
      					<a className={style.btnRight, style.btnDefault} style={{ color: props.button2textColor, backgroundColor: props.button2color }} href="#">{props.button2title}</a>
					</div>

				</div>
				<p>{props.smallText}</p>
			</div> 
		</section>
		</div>
	</div>
        
</>
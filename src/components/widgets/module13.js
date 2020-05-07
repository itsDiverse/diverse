import React from "react"
import style from "../../styles/module13.module.css"
import layoutStyle from "../../styles/layout.module.css"

export default (props) =>
<>
	<div className={layoutStyle.contentWrapper}>
		<div className={style.goingAbout20Minutes}>
			<div className={layoutStyle.containerLg}>
				<div className={style.goingAbout20MinutesBox}>
					<div className={[style.leftBoxContent, style.aboutMinutesTitle].join(' ')}>
						<h2>{props.title}</h2>
						<p>{props.text}</p>
						<ul className={style.aboutMinutesBoxList}>
							<li>
								<figure className={style.icon}><img src={props.icon1} alt={props.image1alt} /></figure>
								<h3>{props.title1}</h3>
								<p>{props.text1}</p>
							</li>
						</ul>
					</div>
					<div className={style.rightBoxContent}>
						<figure className={[style.devicesDashboard, style.loaded].join(' ')}>
				          <div className={style.ground}>
				            <div className={style.shadow}></div>
				          </div>
				          <div className={style.laptop}>
				            <div className={style.device}></div>
				            <div className={style.controls}></div>
				            <div className={style.screen, style.countryIN}></div>
				          </div>
				        </figure>
					</div>
				</div>
				<div className={style.goingAbout20MinutesBox}>
					<div className={style.leftBoxContent}>
						<ul className={style.aboutMinutesBoxList}>
							<li>
								<figure className={style.icon}><img src={props.icon2} alt={props.image2alt} /></figure>
								<h3>{props.title2}</h3>
								<p>{props.text2}</p>
							</li>
						</ul>
					</div>
					<div className={style.rightBoxContent}>
						<ul className={style.aboutMinutesBoxList}>
							<li>
								<figure className={style.icon}><img src={props.icon3} alt={props.image3alt} /></figure>
								<h3>{props.title3}</h3>
								<p>{props.text3}</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.goingAbout20MinutesBox}>
					<div className={style.leftBoxContent}>
						<ul className={style.aboutMinutesBoxList}>
							<li>
								<figure className={style.icon}><img src={props.icon4} alt={props.image4alt} /></figure>
								<h3>{props.title4}</h3>
								<p>{props.text4}</p>
							</li>
						</ul>
					</div>
					<div className={style.rightBoxContent}>
						<ul className={style.aboutMinutesBoxList}>
							<li>
								<figure className={style.icon}><img src={props.icon5} alt={props.image5alt} /></figure>
								<h3>{props.title5}</h3>
								<p>{props.text5}.</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
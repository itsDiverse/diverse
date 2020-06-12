import React from "react"
import style from "../../styles/module19.module.css"

export default (props) =>
<>
	<div className={'contentWrapper'}>
		<main>
			
			<div className={[style.container, style.bannerContainer].join(' ')}>
				<div className={style.bannerWrapper}>
					<h1 className={style.bannerTitle}>{props.title}</h1>
					<p className={style.bannerIntro}>{props.text}</p>
				</div>
			</div>
			<section className={style.servicesSection}>
				<div className={'containerLg'}>
					<div className={style.row}>
						
						<div className={style.servicesBox}>
							<a href={props.box1link} >
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span><img src={props.icon1} /></span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.box1title}</h2>
										<p className={style.servicesDesc}>{props.box1text}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.box1linkText}</span>
									</div>
								</div>
							</div>
							</a>
						</div>
						
						<div className={style.servicesBox}>
							<a href={props.box2link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span><img src={props.icon2} /></span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.box2title}</h2>
										<p className={style.servicesDesc}>{props.box2text}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.box2linkText}</span>
									</div>
								</div>
							</div>
							</a>
						</div>
						
						<div className={style.servicesBox}>
							<a href={props.box3link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span><img src={props.icon3} /></span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.box3title}</h2>
										<p className={style.servicesDesc}>{props.box3text}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.box3linkText}</span>
									</div>
								</div>
							</div>
							</a>
						</div>
						
					</div>
                   
				</div>
			</section>
			<div className={[style.container, style.joinUsSection].join(' ')}>
				<div className={style.innerCol}>
					<div className={[style.innerColWrapper, style.joinUsContent].join(' ')}>
						<h3 className={style.joinUsTitle}>{props.column1title}</h3>
						<p className={style.joinUsDesc}>{props.column1text}</p>
					</div>
					<div className={[style.innerColWrapper, style.joinUsContent].join(' ')}>
						<h3 className={style.joinUsTitle}>{props.column2title}</h3>
						<p className={style.joinUsDesc}>{props.column2text}</p>
					</div>
				</div>
			</div>
		</main>
	</div>
</>
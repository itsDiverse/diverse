import React from "react"
import style from "../../styles/module17.module.css"

export default (props) =>
<>
	<div className={'contentWrapper'}>
		<main>
			<div className={style.servicesSectionTitle}>
				<div className={'containerLg'}>
					<div className={style.row}>
						<div className={style.servicesSectionTitleContent}>
							<span>
							<img src={props.icon} />
							</span>
							<h2>{props.title}</h2>

						</div>
					</div>
				</div>
			</div>
			<section className={style.servicesSection}>
				<div className={layoutStyle.containerLg}>
					<div className={style.row}>
						
						<div className={style.servicesBox} style={{ display: props.display1 }}>
							<a href={props.box1link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span>
									<img src={props.icon1} />
									</span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.title1}</h2>
										<p className={style.servicesDesc}>{props.text1}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={style.servicesFooterIcon}>
											<img src={props.linkIcon1} />
										</span>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.linkText1}</span>
									</div>
								</div>
							</div>
							</a>
						</div>

						<div className={style.servicesBox} style={{ display: props.display2 }}>
							<a href={props.box2link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span>
									<img src={props.icon2} />
									</span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.title2}</h2>
										<p className={style.servicesDesc}>{props.text2}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={style.servicesFooterIcon}>
											<img src={props.linkIcon2} />
										</span>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.linkText2}</span>
									</div>
								</div>
							</div>
							</a>
						</div>

						<div className={style.servicesBox} style={{ display: props.display3 }}>
							<a href={props.box3link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span>
									<img src={props.icon3} />
									</span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.title3}</h2>
										<p className={style.servicesDesc}>{props.text3}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={style.servicesFooterIcon}>
											<img src={props.linkIcon3} />
										</span>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.linkText3}</span>
									</div>
								</div>
							</div>
							</a>
						</div>

						<div className={style.servicesBox} style={{ display: props.display4 }}>
							<a href={props.box4link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span>
									<img src={props.icon4} />
									</span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.title4}</h2>
										<p className={style.servicesDesc}>{props.text4}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={style.servicesFooterIcon}>
											<img src={props.linkIcon4} />
										</span>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.linkText4}</span>
									</div>
								</div>
							</div>
							</a>
						</div>

						<div className={style.servicesBox} style={{ display: props.display5 }}>
							<a href={props.box5link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span>
									<img src={props.icon5} />
									</span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.title5}</h2>
										<p className={style.servicesDesc}>{props.text5}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={style.servicesFooterIcon}>
											<img src={props.linkIcon5} />
										</span>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.linkText5}</span>
									</div>
								</div>
							</div>
							</a>
						</div>

						<div className={style.servicesBox} style={{ display: props.display6 }}>
							<a href={props.box6link}>
							<div className={style.servicesInnercontainer}>
								<div className={[style.servicesIcon, style.sales].join(' ')}>
									<span>
									<img src={props.icon6} />
									</span>
								</div>
								<div className={style.servicesContentWrapper}>
									<div className={style.servicesContent}>
										<h2 className={style.servicesTitle}>{props.title6}</h2>
										<p className={style.servicesDesc}>{props.text6}</p>
									</div>
									<div className={style.servicesFooter}>
										<span className={style.servicesFooterIcon}>
											<img src={props.linkIcon6} />
										</span>
										<span className={[style.servicesFooterText, style.textBlue].join(' ')}>{props.linkText6}</span>
									</div>
								</div>
							</div>
							</a>
						</div>

						
						
						
						
					
					

						
					</div>
				</div>
			</section>
		</main>
	</div>
</>
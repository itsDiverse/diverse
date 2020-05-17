import React from "react"
import style from "../../styles/module21.module.css"

export default (props) =>
<>
	<div className={'contentWrapper'}>
		<div className={style.intelligentRevenueSection}>
			<div className={'containerLg'}>
				<div className={style.intelligentRevenue}>
					<div className={style.intelligentRevenueLeft}>
						<div className={style.intelligentRevenueLeftContent}>
							<h2>{props.title}</h2>
							<p>{props.text}</p>
							<a href={props.linkURL} className={style.intelligentLink}>{props.linkText}</a>
						</div>
					</div>
					<div className={style.intelligentRevenueRight}>
						
						<div className={style.intelligentLine}><img src={props.line} /></div>
						
						<div className={style.intelligentChecklist} style={{ display: props.display1 }}>
							<div className={style.checklistIcon}>
								<img src={props.icon1} />
							</div>
							<div className={style.checklistContent}>
								<h3>{props.bulletHeading1}</h3>
								<ul>
									<li><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint1}</span></li>
									<li style={{ display: props.bulletPoint2display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint2}</span></li>
									<li style={{ display: props.bulletPoint3display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint3}</span></li>
									<li style={{ display: props.bulletPoint4display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint4}</span></li>
									<li style={{ display: props.bulletPoint5display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint5}</span></li>
									<li style={{ display: props.bulletPoint6display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint6}</span></li>
									<li style={{ display: props.bulletPoint7display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint7}</span></li>
									<li style={{ display: props.bulletPoint8display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint8}</span></li>
									<li style={{ display: props.bulletPoint9display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint9}</span></li>
									<li style={{ display: props.bulletPoint10display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint10}</span></li>
								</ul>
							</div>
						</div>

						<div className={style.intelligentChecklist} style={{ display: props.display2 }}>
							<div className={style.checklistIcon}>
								<img src={props.icon2} />
							</div>
							<div className={style.checklistContent}>
								<h3>{props.bulletHeading2}</h3>
								<ul>
								<li><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint11}</span></li>
									<li style={{ display: props.bulletPoint12display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint12}</span></li>
									<li style={{ display: props.bulletPoint13display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint13}</span></li>
									<li style={{ display: props.bulletPoint14display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint14}</span></li>
									<li style={{ display: props.bulletPoint15display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint15}</span></li>
									<li style={{ display: props.bulletPoint16display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint16}</span></li>
									<li style={{ display: props.bulletPoint17display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint17}</span></li>
									<li style={{ display: props.bulletPoint18display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint18}</span></li>
									<li style={{ display: props.bulletPoint19display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint19}</span></li>
									<li style={{ display: props.bulletPoint20display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint20}</span></li>
								</ul>
							</div>
						</div>

						<div className={style.intelligentChecklist} style={{ display: props.display3 }}>
							<div className={style.checklistIcon}>
								<img src={props.icon3} />
							</div>
							<div className={style.checklistContent}>
								<h3>{props.bulletHeading3}</h3>
								<ul>
								<li><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint21}</span></li>
									<li style={{ display: props.bulletPoint22display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint22}</span></li>
									<li style={{ display: props.bulletPoint23display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint23}</span></li>
									<li style={{ display: props.bulletPoint24display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint24}</span></li>
									<li style={{ display: props.bulletPoint25display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint25}</span></li>
									<li style={{ display: props.bulletPoint26display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint26}</span></li>
									<li style={{ display: props.bulletPoint27display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint27}</span></li>
									<li style={{ display: props.bulletPoint28display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint28}</span></li>
									<li style={{ display: props.bulletPoint29display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint29}</span></li>
									<li style={{ display: props.bulletPoint30display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint30}</span></li>
								</ul>
							</div>
						</div>

						<div className={style.intelligentChecklist} style={{ display: props.display4 }}>
							<div className={style.checklistIcon}>
								<img src={props.icon4} />
							</div>
							<div className={style.checklistContent}>
								<h3>{props.bulletHeading4}</h3>
								<ul>
								<li><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint31}</span></li>
									<li style={{ display: props.bulletPoint32display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint32}</span></li>
									<li style={{ display: props.bulletPoint33display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint33}</span></li>
									<li style={{ display: props.bulletPoint34display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint34}</span></li>
									<li style={{ display: props.bulletPoint35display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint35}</span></li>
									<li style={{ display: props.bulletPoint36display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint36}</span></li>
									<li style={{ display: props.bulletPoint37display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint37}</span></li>
									<li style={{ display: props.bulletPoint38display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint38}</span></li>
									<li style={{ display: props.bulletPoint39display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint39}</span></li>
									<li style={{ display: props.bulletPoint40display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint40}</span></li>
								</ul>
							</div>
						</div>

						<div className={style.intelligentChecklist} style={{ display: props.display5 }}>
							<div className={style.checklistIcon}>
								<img src={props.icon5} />
							</div>
							<div className={style.checklistContent}>
								<h3>{props.bulletHeading5}</h3>
								<ul>
								<li><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint41}</span></li>
									<li style={{ display: props.bulletPoint42display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint42}</span></li>
									<li style={{ display: props.bulletPoint43display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint43}</span></li>
									<li style={{ display: props.bulletPoint44display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint44}</span></li>
									<li style={{ display: props.bulletPoint45display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint45}</span></li>
									<li style={{ display: props.bulletPoint46display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint46}</span></li>
									<li style={{ display: props.bulletPoint47display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint47}</span></li>
									<li style={{ display: props.bulletPoint48display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint48}</span></li>
									<li style={{ display: props.bulletPoint49display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint49}</span></li>
									<li style={{ display: props.bulletPoint50display }}><span className={style.checkIcon}><img src={props.bullet} /></span><span>{props.bulletPoint50}</span></li>
								</ul>
							</div>
						</div>

						
						
						</div>

					</div>
				</div>
			</div>
		</div>
	
</>
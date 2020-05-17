import React from "react"
import style from "../../styles/module14.module.css"


export default (props) =>
<>
	<div className={'contentWrapper'}>
		<div className={style.listingCardSection}>
			<div className={'containerLg'}>
				<div className={style.listingCardWrapper}>
					<div className={style.listingCardBox} style={{ display: props.display1 }}>
						<a href={props.box1link}>
							<img src={props.icon1} className={style.listingCardLogo} alt={props.icon1alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title1}</h3>
								<p>{props.text1}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box1tag1display }}>{props.box1tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box1tag2display }}>{props.box1tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display2 }}>
						<a href={props.box2link}>
							<img src={props.icon2}  className={style.listingCardLogo} alt={props.icon2alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title2}</h3>
								<p>{props.text2}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box2tag1display }}>{props.box2tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box2tag2display }}>{props.box2tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display3 }}>
						<a href={props.box3link}>
							<img src={props.icon3}  className={style.listingCardLogo} alt={props.icon3alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title3}</h3>
								<p>{props.text3}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box3tag1display }}>{props.box3tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box3tag2display }}>{props.box3tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display4 }}>
						<a href={props.box4link}>
							<img src={props.icon4} className={style.listingCardLogo} alt={props.icon4alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title4}</h3>
								<p>{props.text4}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box4tag1display }}>{props.box4tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box4tag2display }}>{props.box4tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display5 }}>
						<a href={props.box5link}>
							<img src={props.icon5}  className={style.listingCardLogo} alt={props.icon5alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title5}</h3>
								<p>{props.text5}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box5tag1display }}>{props.box5tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box5tag2display }}>{props.box5tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display6 }}>
						<a href={props.box6link}>
							<img src={props.icon6}  className={style.listingCardLogo} alt={props.icon6alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title6}</h3>
								<p>{props.text6}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box6tag1display }}>{props.box6tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box6tag2display }}>{props.box6tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display7 }}>
						<a href={props.box7link}>
							<img src={props.icon7} className={style.listingCardLogo} alt={props.icon7alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title7}</h3>
								<p>{props.text7}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box7tag1display }}>{props.box7tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box7tag2display }}>{props.box7tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display8 }}>
						<a href={props.box8link}>
							<img src={props.icon8}  className={style.listingCardLogo} alt={props.icon8alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title8}</h3>
								<p>{props.text8}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box8tag1display }}>{props.box8tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box8tag2display }}>{props.box8tag2}</div>
								</div>
							</div>
						</a>
					</div>
					<div className={style.listingCardBox} style={{ display: props.display9 }}>
						<a href={props.box9link}>
							<img src={props.icon9}  className={style.listingCardLogo} alt={props.icon9alt} />
							<div className={style.listingCardContent}>
								<h3>{props.title9}</h3>
								<p>{props.text9}</p>
								<div className={style.listingCardBadges}>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box9tag1display }}>{props.box9tag1}</div>
									<div className={[style.backgroundGreen, style.textWhite, style.listingCardBadge].join(' ')} style={{ display: props.box9tag2display }}>{props.box9tag2}</div>
								</div>
							</div>
						</a>
					</div>
				
					
				
				</div>
			</div>
		</div>
	</div>
</>
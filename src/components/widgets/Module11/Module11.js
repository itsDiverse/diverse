import React from "react"
import style from "./Module11.module.css"

export default (props) =>
<>
<div className={'contentWrapper'}>
		<div className={'containerLg'}>
			<div className={style.b2cMarketplaces}>
				<div className={style.marketplacesTitleSection}>
					<img src={props.image1} />
					<h3>{props.title}</h3>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
		<div className={'containerXl'}>
			<div className={style.marketplacesGallerySectionWrapper}>
				<div className={style.marketplacesGallerySection}>
					<div className={style.marketplacesGalleryPhoto}></div>
					<div className={style.marketplacesGalleryContent} style={{height: props.boxHeight}}>
						<div className={style.marketplacesQuoteWrapper}>
							<div className={[style.marketplacesQuote ,style.QuoteLyft].join(' ')}>
		                      <h2><a href="#"><img src={props.boxLogo} width="64" height="46" alt="Lyft logo" /></a></h2>
		                      <p>{props.boxText}</p>
		                    </div>
	                    </div>
					</div>
				</div>
			</div>
		</div>
		<div className={'containerXl'}>
			<div className={style.marketplacesGalleryBottomContent}>
				<div className={style.marketplacesGalleryBottomContentLeft}>
					<figure className={style.marketplacesGalleryRouting}>
		              <img src={props.image3} width="72" height="72" alt="3 arrows spreading" />
		            </figure>
		            <p>{props.textLeft}</p>
				</div>
				<div className={style.marketplacesGalleryBottomContentRight}>
					<p>{props.textRight}</p>
					<ul>
						<li><a className={[style.linkArrow, style.commonLink].join(' ')} href={props.link}>{props.linkText}</a></li>
					</ul>
				</div>	
			</div>
		</div>
	</div>
</>
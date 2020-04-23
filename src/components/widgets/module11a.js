import React from "react"
import style from "../../styles/module11a.module.css"

export default (props) =>
<>
	<div className={style.contentWrapper}>
		<div className={style.containerLg}>
			<div className={style.b2cMarketplaces}>
				<div className={style.marketplacesTitleSection}>
					<img src={props.image1} />
					<h3>B2C marketplaces</h3>
					<p>Marketplaces connect consumers with what they want: rides, food, accommodation, and more. Your payments should meet the same high standards as your product experience: with just a tap, Stripe helps sellers on your marketplace get paid.</p>
				</div>
			</div>
		</div>
		<div className={style.containerXl}>
			<div className={style.marketplacesGallerySectionWrapper}>
				<div className={style.marketplacesGallerySection}>
					<div className={style.marketplacesGalleryPhoto}></div>
					<div className={style.marketplacesGalleryContent}>
						<div className={style.marketplacesQuoteWrapper}>
							<div className={[style.marketplacesQuote, style.QuoteLyft].join(' ')}>
		                      <h2><a href="#"><img src={props.image2} width="237" height="30" alt="Lyft logo" /></a></h2>
		                      <p>charity: water optimized their mobile and web donation flows with Stripe so they can focus on what really matters: bringing clean water to every person on the planet. Using Stripe, they also built a new monthly giving program, which makes it even easier for subscribers to donate throughout the year.</p>
		                    </div>
	                    </div>
					</div>
				</div>
			</div>
		</div>
		<div className={style.containerXl}>
			<div className={style.marketplacesGalleryBottomContent}>
				<div className={style.marketplacesGalleryBottomContentLeft}>
					<figure className={style.marketplacesGalleryRouting}>
		              <img src={props.image3} width="72" height="72" alt="3 arrows spreading" />
		            </figure>
		            <p>Payments for marketplaces used to be hard: accounting for seller earnings, paying out multiple parties, managing 1099-Ks, tax reporting, and regulatory compliance. Marketplaces shouldn’t have to build all that from scratch, so we made <a className={style.commonLink} href="#">Stripe Connect</a> to provide all the tools you need to run a multi-sided marketplace.</p>
				</div>
				<div className={style.marketplacesGalleryBottomContentRight}>
					<p>Integrating Connect means always having access to state-of-the-art technology. Attract and retain more sellers with instant payouts, accept payments across all channels, and expand to 30+ countries with a single integration.</p>
					<ul>
						<li><a className={[style.linkArrow, style.commonLink].join(' ')} href="#">Learn more about Stripe for marketplaces</a></li>
					</ul>
				</div>	
			</div>
		</div>
	</div>

</>
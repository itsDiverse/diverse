import React from "react"
import style from "../../styles/module20.module.css"

export default (props) =>
<>
	<div className={style.contentWapper}>
		<div className={style.saveTimeOnReviews}>
			<div className={style.containerLg}>
				<div className={style.saveTimeOnReviewsTitle}>
					<h3>Save time on manual reviews</h3>
					<p>Improve your ability to detect fraud patterns and take action quickly. Stripe’s optimized workflows slash the time it takes to review payments.</p>
				</div>
			</div>
			<div className={[style.feature, style.patterns].join(' ')}>
				<div className={style.containerLg}>
					<div className={style.patternsContent}>
						<div className={style.patternsLeftContent}>
							<h3>BUST HIDDEN NETWORKS OF FRAUDSTERS</h3>
							<p>Prevent common fraud patterns like card testing by evaluating payments holistically rather than in isolation. We use device fingerprinting and identity resolution to help you catch repeat fraudsters.</p>
						</div>
						<div className={style.patternsRightContent}>
							<div className={style.imageContainer}>
								<img src="images/related-payments.jpg" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={[style.feature, style.networks].join(' ')}>
				<div className={style.containerLg}>
					<div className={style.networksContent}>
						<div className={style.networksLeftContent}>
							<h3>CATCH SOPHISTICATED FRAUDSTERS WITH ADVANCED FRAUD INSIGHTS</h3>
							<p>Fraudulent purchases often look atypical in comparison to legitimate ones. Our fraud insights make it easy to perform manual reviews. For example, you can compare the geolocated IP address and the credit card address, or look at how behavioral information like time to checkout compares with legitimate buyers for your business.</p>
						</div>
						<div className={style.networksRightContent}>
							<div className={style.imageContainer}>
								<img src="images/session.jpg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
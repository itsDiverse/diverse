import React from "react"
import style from "./Module10.module.css"


export default (props) =>
<>

<div className={'contentWrapper'}>
		<div className={style.solutionsRootedSection}>
			<div className={'containerLg'}>
			    <div className={style.sectionIntro}>
					<h2 className={style.sectionTitle}>{props.intro}</h2>
			  		<p className={style.sectionDesc}>{props.description}</p>
				</div>
				<div className={style.solutionsRootedContent}>
				  <div className={style.rootedContentLeft}>
				      <div className={[style.rootedBox, style.rootedBoxDocumentation].join(' ')}>
				        <figure aria-hidden="true">
				          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="23" viewBox="0 0 27 23"><g fill="none" transform="translate(-.196 .1)"><path fill="#87BBFD" d="M2.37192708,0.704694752 L7.81992708,0.704694752 C11.0704271,0.704694752 13.7044271,2.21519475 13.7044271,4.95269475 L13.7044271,22.3271948 C12.9364271,22.3271948 12.1819271,21.8216948 11.7094271,21.4421948 C10.1644271,20.2001948 7.12392708,20.2001948 3.87642708,20.2001948 L2.37192708,20.2001948 C1.99638047,20.2005928 1.63605717,20.0517891 1.37022431,19.7865188 C1.10439145,19.5212486 0.954824697,19.1612414 0.954427083,18.7856948 L0.954427083,2.12369475 C0.954427083,1.34069475 1.58892708,0.707694752 2.37192708,0.707694752 L2.37192708,0.704694752 Z"></path><path fill="#6772E5" d="M25.0369271,0.704694752 L19.5889271,0.704694752 C16.3399271,0.704694752 13.7044271,2.21519475 13.7044271,4.95269475 L13.7044271,22.3271948 C14.4724271,22.3271948 15.2269271,21.8216948 15.6994271,21.4421948 C17.2444271,20.2001948 20.2849271,20.2001948 23.5324271,20.2001948 L25.0369271,20.2001948 C25.4129935,20.2005933 25.7737718,20.051378 26.0396911,19.7854587 C26.3056103,19.5195395 26.4548257,19.1587612 26.4544271,18.7826948 L26.4544271,2.12519475 C26.4548257,1.74912833 26.3056103,1.38835002 26.0396911,1.12243075 C25.7737718,0.856511486 25.4129935,0.707296165 25.0369271,0.707694752 L25.0369271,0.704694752 Z"></path></g></svg>
				        </figure>
				        <h4 className={style.rootedTitle}>{props.item1title}</h4>
				        <p className={style.rootedDesc}>{props.item1desc}</p>
				      </div>
				      <div className={[style.rootedBox, style.rootedBoxOss].join(' ')}>
				        <figure aria-hidden="true">
				          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27"><g fill="none" fill-rule="evenodd" transform="translate(-.488 .268)"><path fill="#87BBFD" fill-rule="nonzero" d="M13.7044271,25.9444224 C6.66279652,25.9444224 0.954427083,20.2360529 0.954427083,13.1944224 C0.954427083,6.15279182 6.66279652,0.44442238 13.7044271,0.44442238 C20.7460576,0.44442238 26.4544271,6.15279182 26.4544271,13.1944224 C26.4544271,20.2360529 20.7460576,25.9444224 13.7044271,25.9444224 Z"></path><path fill="#6772E5" d="M11.4349271,9.56142238 L11.4334271,9.55542238 L7.80342708,13.1854224 L11.4334271,16.8124224 C11.8339716,17.2142095 11.8329642,17.8646279 11.4311771,18.2651724 C11.0293899,18.6657169 10.3789716,18.6647095 9.97842708,18.2629224 L5.62842708,13.9129224 C5.22807113,13.5122998 5.22807113,12.863045 5.62842708,12.4624224 L9.98292708,8.10942238 C10.3838858,7.70846368 11.0339683,7.70846369 11.4349271,8.10942241 C11.8358858,8.51038113 11.8358858,9.16046365 11.4349271,9.56142238 Z M21.9289271,12.4864224 L21.9319271,12.4849224 C22.3312847,12.8853724 22.3312847,13.5334723 21.9319271,13.9339224 L17.5759271,18.2869224 C17.1725216,18.6700267 16.5372914,18.6618299 16.1439055,18.268444 C15.7505196,17.8750581 15.7423228,17.2398279 16.1254271,16.8364224 L19.7524271,13.2109224 L16.1254271,9.58092238 C15.7418918,9.17791523 15.7494252,8.54266539 16.1424099,8.14886705 C16.5353946,7.75506871 17.1706275,7.74622139 17.5744271,8.12892238 L21.9289271,12.4864224 Z"></path></g></svg>
				        </figure>
				        <h4 className={style.rootedTitle}>{props.item2title}</h4>
				        <p className={style.rootedDesc}>{props.item2desc}</p>
				      </div>
				      <div className={[style.rootedBox, style.rootedBoxWorksWith].join(' ')}>
				        <figure aria-hidden="true">
				          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25"><g fill="none" transform="translate(.512 -.615)"><path fill="#87BBFD" d="M25.3828555,18.4407956 C25.3663277,19.1007841 24.9773183,19.6944321 24.378793,19.9730456 L13.4556055,25.0220456 C12.9956036,25.2364112 12.4643573,25.2364112 12.0043555,25.0220456 L1.08116797,19.9730456 C0.48330007,19.6939494 0.0950088214,19.1003998 0.0787929688,18.4407956 L0.0787929688,4.96610806 C0.0889179688,4.62860806 0.196917969,4.30798306 0.382542969,4.03798306 L12.7299805,9.73835806 L25.0824805,4.03460806 C25.2647305,4.30460806 25.3727305,4.62523306 25.3828555,4.96273306 L25.3828555,18.4357331 L25.3828555,18.4407956 Z"></path><path fill="#6772E5" d="M25.3828555,18.4407956 C25.3663277,19.1007841 24.9773183,19.6944321 24.378793,19.9730456 L13.4556055,25.0220456 C13.2281845,25.1273726 12.9806076,25.1820698 12.7299805,25.1823581 L12.7299805,9.74173306 L25.0824805,4.03798306 C25.2681055,4.30798306 25.374418,4.62860806 25.3862305,4.96610806 L25.3862305,18.4391081 L25.3828555,18.4407956 Z"></path><path fill="#87BBFD" d="M12.7299805,5.79298306 C9.46804297,5.79298306 6.82373047,4.49023306 6.82373047,2.88204556 L6.82373047,0.94142056 L6.98910547,0.94142056 C7.59660547,2.23742056 9.92873047,3.20267056 12.7299805,3.20267056 C15.5312305,3.20604556 17.865043,2.23742056 18.4708555,0.94142056 L18.6362305,0.94142056 L18.6362305,2.88204556 C18.6362305,4.49023306 15.991918,5.79298306 12.7299805,5.79298306 Z"></path></g></svg>
				        </figure>
				        <h4 className={style.rootedTitle}>{props.item3title}</h4>
				        <p className={style.rootedDesc}>{props.item3desc}
				        </p>
				      </div>
				  </div>
				  <div className={style.rootedContentRight}>
				    <aside className={[style.engineeringScale, style.commonCard].join(' ')}>
				      <div className={style.cover} style={{ backgroundImage: `url(${props.boxImage})` }}></div>
				      <h2 className={style.engineeringScaleTitle}>{props.boxTitle}</h2>
				      <p className={style.engineeringScaleDesc}>{props.boxDesc}</p>
				      <a href="#" target="_blank" className={[style.btnEngineering, style.btnCommon].join(' ')} style={{ backgroundColor: props.boxColor }} data-analytics-action="visit_increment" data-analytics-source="increment_cta">
				        {props.buttonText}
				      </a>
				    </aside>
				  </div>
				</div>
  			</div>
  			<div className={[style.commonGrid, style.anchorBottom].join(' ')}>
			  <div className={style.backgroundContainer}>
			    <div className={style.grid}>
			      <div className={style.background}></div>
			    </div>
			  </div>
			  <div className={style.backgroundlineContainer}>
			    <div className={style.grid}>
			        <div className={style.linebg}></div>
			    	<div className={style.linebg}></div>
			    	<div className={style.linebg}></div>
			    	<div className={style.linebg}></div>
			    	<div className={style.linebg}></div>
			    </div>
			  </div>
			</div>
		</div>
	</div>
    </>
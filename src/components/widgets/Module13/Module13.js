import React from "react"
//import style from "./Module13.module.css"
import { StyledContentWrapper } from "./Module13.styles"

export default props => (
  <StyledContentWrapper theme={props.theme} images={props.images}>
    <div className="content-wrapper">
      <div className="listing-card-section">
        <div className="container-lg">
          <div className="listing-card-wrapper">
            <div className="listing-card-box">
              <a href={props.data.box1.url}>
                <img
                  src={props.images.imageBox1}
                  alt={props.images.imageBox3Alt}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.box1.title}</h3>
                  <p>{props.data.box1.text}</p>
                  <div className="listing-card-badges">
                    {props.data.box1.btnLeft && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box1.btnLeft}
                      </div>
                    )}
                    {props.data.box1.btnRight && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box1.btnRight}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href={props.data.box2.url}>
                <img
                  src={props.images.imageBox2}
                  alt={props.images.imageBox2Alt}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.box2.title}</h3>
                  <p>{props.data.box2.text}</p>
                  <div className="listing-card-badges">
                    {props.data.box2.btnLeft && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box2.btnLeft}
                      </div>
                    )}
                    {props.data.box2.btnRight && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box2.btnRight}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
            <div className="listing-card-box">
              <a href={props.data.box3.url}>
                <img
                  src={props.images.imageBox3}
                  alt={props.images.imageBox3Alt}
                  className="listing-card-logo"
                ></img>
                <div className="listing-card-content">
                  <h3>{props.data.box3.title}</h3>
                  <p>{props.data.box3.text}</p>
                  <div className="listing-card-badges">
                    {props.data.box3.btnLeft && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box3.btnLeft}
                      </div>
                    )}
                    {props.data.box3.btnRight && (
                      <div className="background-green text-white listing-card-badge">
                        {props.data.box3.btnRight}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
            {props.data.box4.title && (
              <div className="listing-card-box">
                <a href={props.data.box4.url}>
                  <img
                    src={props.images.imageBox4}
                    alt={props.images.imageBox4Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box4.title}</h3>
                    <p>{props.data.box4.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box4.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box4.btnLeft}
                        </div>
                      )}
                      {props.data.box4.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box4.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box5.title && (
              <div className="listing-card-box">
                <a href={props.data.box5.url}>
                  <img
                    src={props.images.imageBox5}
                    alt={props.images.imageBox5Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box5.title}</h3>
                    <p>{props.data.box5.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box5.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box5.btnLeft}
                        </div>
                      )}
                      {props.data.box5.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box5.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box6.title && (
              <div className="listing-card-box">
                <a href={props.data.box6.url}>
                  <img
                    src={props.images.imageBox6}
                    alt={props.images.imageBox6Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box6.title}</h3>
                    <p>{props.data.box6.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box6.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box6.btnLeft}
                        </div>
                      )}
                      {props.data.box6.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box6.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box7.title && (
              <div className="listing-card-box">
                <a href={props.data.box7.url}>
                  <img
                    src={props.images.imageBox7}
                    alt={props.images.imageBox7Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box7.title}</h3>
                    <p>{props.data.box7.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box7.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box7.btnLeft}
                        </div>
                      )}
                      {props.data.box7.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box7.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box8.title && (
              <div className="listing-card-box">
                <a href={props.data.box8.url}>
                  <img
                    src={props.images.imageBox8}
                    alt={props.images.imageBox8Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box8.title}</h3>
                    <p>{props.data.box8.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box8.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box8.btnLeft}
                        </div>
                      )}
                      {props.data.box8.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box8.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box9.title && (
              <div className="listing-card-box">
                <a href={props.data.box9.url}>
                  <img
                    src={props.images.imageBox9}
                    alt={props.images.imageBox9Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box9.title}</h3>
                    <p>{props.data.box9.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box9.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box9.btnLeft}
                        </div>
                      )}
                      {props.data.box9.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box9.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box10.title && (
              <div className="listing-card-box">
                <a href={props.data.box10.url}>
                  <img
                    src={props.images.imageBox10}
                    alt={props.images.imageBox10Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box10.title}</h3>
                    <p>{props.data.box10.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box10.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box10.btnLeft}
                        </div>
                      )}
                      {props.data.box10.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box10.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box11.title && (
              <div className="listing-card-box">
                <a href={props.data.box11.url}>
                  <img
                    src={props.images.imageBox11}
                    alt={props.images.imageBox11Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box11.title}</h3>
                    <p>{props.data.box11.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box11.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box11.btnLeft}
                        </div>
                      )}
                      {props.data.box11.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box11.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
            {props.data.box12.title && (
              <div className="listing-card-box">
                <a href={props.data.box12.url}>
                  <img
                    src={props.images.imageBox12}
                    alt={props.images.imageBox12Alt}
                    className="listing-card-logo"
                  ></img>
                  <div className="listing-card-content">
                    <h3>{props.data.box12.title}</h3>
                    <p>{props.data.box12.text}</p>
                    <div className="listing-card-badges">
                      {props.data.box12.btnLeft && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box12.btnLeft}
                        </div>
                      )}
                      {props.data.box12.btnRight && (
                        <div className="background-green text-white listing-card-badge">
                          {props.data.box12.btnRight}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </StyledContentWrapper>
)

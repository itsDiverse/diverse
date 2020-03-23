import React from 'react'
import style from "../../styles/module8.module.css"
import { AnimatedList } from 'react-animated-list';

class AnimatedModule extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: [
        { content: 'Canceled subscription to Additional Storage', time: '7 hours ago' },
        { content: 'Payment failed and an alert was sent', time: '7 hours ago' },
        { content: 'Subscribed to Bronze Plan ', time: '7 hours ago' },
        { content: 'Payment failed and an alert was sent', time: '7 hours ago' },
        { content: 'Payment failed and an alert was sent', time: '7 hours ago' },
        { content: 'Canceled subscription to Additional Storage', time: '7 hours ago' },
        { content: 'Stripe automatically updated a Visa ending in 4242', time: '7 hours ago' },
        // {content: 'Subscribed to Bronze Plan' , time: '7 hours ago'},
        // {content: 'SPayment failed and an alert was sent' , time: '7 hours ago'},
        // {content: 'Stripe automatically updated a Visa ending in 4242' , time: '7 hours ago'}, 
      ]
    }
  }

  componentDidMount() {
    let arr = this.state.content
    setInterval(() => {
      arr.unshift(arr.pop())
      this.setState({ content: arr })
    }, 2000);

  }
  render() {
    let data = this.state.content && this.state.content.map((i, id) => {
      return (
        <React.Fragment>
          <div class={style.card}>
            <div class={style.container}>
              <ul className={style.list}>
                <div style={{ flexDirection: 'row', flex: 'row' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#AFF1B6" d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z"></path><path fill="#24B47E" fill-rule="nonzero" d="M15.078125,5.3125 L14.296875,5.3125 L14.296875,4.7265625 C14.296875,4.18722192 13.8596531,3.75 13.3203125,3.75 C12.7809719,3.75 12.34375,4.18722192 12.34375,4.7265625 L12.34375,5.3125 L7.65625,5.3125 L7.65625,4.7265625 C7.65625,4.18722192 7.21902808,3.75 6.6796875,3.75 C6.14034692,3.75 5.703125,4.18722192 5.703125,4.7265625 L5.703125,5.3125 L4.921875,5.3125 C4.27466631,5.3125 3.75,5.83716631 3.75,6.484375 L3.75,15.078125 C3.75,15.7253337 4.27466631,16.25 4.921875,16.25 L15.078125,16.25 C15.7253337,16.25 16.25,15.7253337 16.25,15.078125 L16.25,6.484375 C16.25,5.83716631 15.7253337,5.3125 15.078125,5.3125 Z M14.6875,14.6875 L5.3125,14.6875 L5.3125,8.4375 L14.6875,8.4375 L14.6875,14.6875 Z"></path></g>
                  </svg>
                  <li className={style.show}>{i.content}</li>
                </div>
                <li className={style.show}>{i.time}</li>
              </ul>
            </div>
          </div>


        </React.Fragment>
      )
    })
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default AnimatedModule
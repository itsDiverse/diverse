import React from "react"
import { LayoutV1 } from "../components/Layout"

export default () => (
  <LayoutV1>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        <label>
          Your Name: <input type="text" name="goals" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="text" name="advertise" />
        </label>
      </p>
      <p>
        <label>
          Your Name: <input type="text" name="sell" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="text" name="spend" />
        </label>
      </p>

      <p>
        <label>
          Message: <textarea name="website"></textarea>
        </label>
        <label>
          Message: <textarea name="name"></textarea>
        </label>
        <label>
          Message: <textarea name="email"></textarea>
        </label>
        <label>
          Message: <textarea name="number"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </LayoutV1>
)

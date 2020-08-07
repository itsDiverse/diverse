import React, { PureComponent } from "react"
import styled, { injectGlobal } from "styled-components"

import rem from "../../../utils/rem"
import Nav from "../../Navbar/v1"
import FooterV1 from "../../Footer/Footer_v1"

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

class LayoutV1 extends PureComponent {
  state = {
    isMobileNavFolded: true,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  onRouteChange = () => {
    this.setState({
      isMobileNavFolded: true,
    })
  }

  render() {
    const { isMobileNavFolded } = this.state
    return (
      <Wrapper>
        <Nav
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
        />
        {this.props.children}
        <FooterV1 />
      </Wrapper>
    )
  }
}

export default LayoutV1

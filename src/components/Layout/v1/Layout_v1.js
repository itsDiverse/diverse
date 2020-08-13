import React, { PureComponent } from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import Nav from "../../Navbar/v1"
import { Footer } from "../../Footer/v1/Footer"
import { MobileFooter } from "../../MobileFooter/v1/MobileFooter"

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
`
const MediaFooter = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 900px)",
  })

  if (isDesktopOrLaptop) return <Footer />
  if (isTabletOrMobile) return <MobileFooter />

  return null
}

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
        <main>{this.props.children}</main>
        <MediaFooter />
      </Wrapper>
    )
  }
}

export default LayoutV1

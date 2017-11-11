// Page
import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'
import styles from './style.css'
import Section from '../elements/Section'
import Button from '../elements/Button'
import A from '../elements/A'
// import * as ku from '../../lib/ke-utils';

const Page = () => {
  const buttonContainerStyle = {
    padding: '100px 0 40px 0'
  }
  return (
    <div id='page-wrapper' className={styles.pageWrapper}>
      <TopBar />
      <div style={buttonContainerStyle}>
        <Section>
          <A href='https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjY5ODI5OTQzMDcyLWU5ZGI1MDMxNGMzYjk1NzBiMTZjOGQ5OWE4Zjg5MTU0NzgyNWE3N2RjMGJmODcxMzkyZGMwMTNmYjFhZDllZDY'>
            <Button green><i className="fa fa-slack fa-2x" aria-hidden="true"></i>Join Us via Slack!</Button>
          </A>
        </Section>
      </div>
      <Footer />
    </div>
  )
}

export default Page

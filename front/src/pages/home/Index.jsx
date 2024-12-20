import React, { Component } from 'react'
import Banner from './components/Banner'
import Topcategories from './components/Topcategories'
import { Card } from 'react-bootstrap'
import Cardslider from './components/Cardslider'
import Staticcard from './components/Staticcard'
export class Index extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Topcategories />
        <Cardslider />
        <Staticcard/>
      </div>
    )
  }
}

export default Index

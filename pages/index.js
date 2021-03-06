import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import ScheduleLine from '../components/ScheduleLine'
import FixedContainer from '../components/FixedContainer'
import { fonts, WidthContainer, Button } from '../core/styledCollection'

const NoContent = styled.div`
  width: 100%;
  background: #FAFAFA;
  padding: 50px 0;
  color: #777;
  line-height: 30px;
  font-family: ${fonts.generalFont}

  ${this} > div {
    font-size: 18px;
  }
`

const PanelContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const Heading = styled.h1`
  margin: 0;
  display: block;
  font-size: 30px;
  font-weight: 400;
  color: #333;
  padding: 50px 0;
  font-family: ${fonts.generalFont}
`

export default class extends Component {
  render(){
    return(
      <div>
        <Navigator />
        <FixedContainer>
          <Hero heading="Schedule" />
          <PanelContainer>
            <WidthContainer>
              <Button white bg="#3D5AFE">ADD NEW ITEM</Button>
              <Button>SHARE OR PRINT</Button>
              <Button>IMPORT</Button>
            </WidthContainer>
          </PanelContainer>
        </FixedContainer>
        <NoContent>
          <WidthContainer>วิธีการใช้งานเบื้องต้น! ถ้าหากจะเพิ่มตารางสอบให้คลิกที่ปุ่มสีนำ้เงิน ADD NEW ITEM, เมื่อสร้างตารางของตัวเองเรียบร้อยแล้วสามารถคลิกที่ปุ่ม SHARE OR PRINT แล้วนำลิ้งค์ที่ได้ไปแชร์ให้กับเพื่อน อีกทั้งยังสามารถพิมพ์เก็บไว้ได้อีกด้วย, ปุ่มสุดท้ายคือปุ่ม IMPORT ไว้ใช้สำหรับนำตารางของเพื่อนที่ได้แชร์เอาไว้แล้วนำมาเป็นของเราเอง (ถ้าขี้เกียจก็รอเพื่อนทำตารางให้แล้วรอ IMPORT ก็ได้)</WidthContainer>
        </NoContent>

        <WidthContainer>
          <Heading>Wednesday, May 2017</Heading>
        </WidthContainer>
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine withBorder={true}/>

        <WidthContainer>
          <Heading>Sunday, May 2017</Heading>
        </WidthContainer>
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine withBorder={true}/>

        <Footer />
      </div>
    )
  }
}

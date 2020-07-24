import React, { useState } from 'react'
import './App.css'

import InstagramEmbed from 'react-instagram-embed'

const Home = () => {
  const [icoLetter, setIcoLetter] = useState('g')
  const icoMouseOver = (e) => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    setIcoLetter(possible.charAt(Math.floor(Math.random() * possible.length)))
  }

  return (
    <div class="home">
      <div class="name_card">
        <span class="sav">Savannah Peykani</span><br />
        Creative Producer and Project Manager in Los Angeles<br />
        <a class="sav_email" href="mailto:slpeykani@gmail.com ">slpeykani@gmail.com</a>
      </div>
      <span class="samples_header">Production Work Samples</span>
      <div class="samples">
        <div class="sample_item">
          <div class="sample_item_title">CLUB 404 “Digital Psychedelia” Campaign Launch Video:</div>
          <div class="sample_item_media">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XHzlYzxmqns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="sample_item_role">
            <strong>Role</strong> - Assistant Producer; casting; script edits; directed Miquela’s voiceover session; post-production supervisor
          </div>
        </div>
        <hr />
        <div class="sample_item">
          <div class="sample_item_title">CLUB 404 “HEROES! With Mandy Harris Williams”:</div>
          <div class="sample_item_media">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jl_j4NKg56E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="sample_item_role">
            <strong>Role</strong> - Assistant Producer and BTS photographer
          </div>
        </div>
        <hr />
        <div class="sample_item">
          <div class="sample_item_title">MIQUELA - “Wasted” Music Video:</div>
          <div class="sample_item_media">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-4m82n8b1oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="sample_item_role">
            <strong>Role</strong> - Assistant Producer; assisted with creative direction 
          </div>
        </div>
        <hr />
        <div class="sample_item">
          <div class="sample_item_title">CLUB 404 “HOTLINE 404, Rituals”:</div>
          <div class="sample_item_media">
            <InstagramEmbed
              url='https://www.instagram.com/tv/BzQ6uHQlmR7/'
              maxWidth={560}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div class="sample_item_role">
            <strong>Role</strong> - Lead Producer; managed audio recording and edited voicemails; directed Miquela’s voiceover session; creative direction; sourced crew and talent; location scouting; post-production supervisor
          </div>
        </div>
        <hr />
        <div class="sample_item">
          <div class="sample_item_title">CLUB 404 “ASMR”:</div>
          <div class="sample_item_media">
            <InstagramEmbed
              url='https://www.instagram.com/tv/B4VwBxOlYvs/'
              maxWidth={560}
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
          <div class="sample_item_role">
            <strong>Role</strong> - Lead Producer; creative direction; sourced crew and talent; location scouting and art direction; audio editing and foley work; post-production supervisor
          </div>
        </div>
      </div>
      <div class="ico" onMouseOver={icoMouseOver}>{icoLetter}</div>

    </div>
  )
}

export default Home


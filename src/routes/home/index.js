import { h } from 'preact'
import { useState } from 'preact/hooks';

import style from './style'

import InstagramEmbed from 'react-instagram-embed';

const Home = () => {
  const [icoLetter, setIcoLetter] = useState('g')
  const icoMouseOver = (e) => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    setIcoLetter(possible.charAt(Math.floor(Math.random() * possible.length)))
  }

  return (
    <div class={style.home}>
    <div class={style['name_card']}>
      <span class={style['sav']}>Savannah Peykani</span><br />
      Creative Producer and Project Manager in Los Angeles<br />
      <a class={style['sav_email']} href="mailto:slpeykani@gmail.com ">slpeykani@gmail.com</a>
    </div>
    <div class={style['ico']} onMouseOver={icoMouseOver}>{icoLetter}</div>
    <span class={style['samples_header']}>Production Work Samples</span>
    <div class={style['samples']}>
      <div class={style['sample_item']}>
        <div class={style['sample_item_media']}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XHzlYzxmqns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class={style['sample_item_role']}>
          <strong>Role</strong> - Assistant Producer; casting; script edits; directed Miquela’s voiceover session; post-production supervisor
        </div>
      </div>
      <hr style="width:300%;margin-left:-100%;" />
      <div class={style['sample_item']}>
        <div class={style['sample_item_media']}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Jl_j4NKg56E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class={style['sample_item_role']}>
          <strong>Role</strong> - Assistant Producer and BTS photographer
        </div>
      </div>
      <hr style="width:300%;margin-left:-100%;" />
      <div class={style['sample_item']}>
        <div class={style['sample_item_media']}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-4m82n8b1oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class={style['sample_item_role']}>
          <strong>Role</strong> - Assistant Producer; assisted with creative direction 
        </div>
      </div>
      <hr style="width:300%;margin-left:-100%;" />
      <div class={style['sample_item']}>
        <div class={style['sample_item_media']}>
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
        <div class={style['sample_item_role']}>
          <strong>Role</strong> - Lead Producer; managed audio recording and edited voicemails; directed Miquela’s voiceover session; creative direction; sourced crew and talent; location scouting; post-production supervisor
        </div>
      </div>
      <hr style="width:300%;margin-left:-100%;" />
      <div class={style['sample_item']}>
        <div class={style['sample_item_media']}>
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
        <div class={style['sample_item_role']}>
          <strong>Role</strong> - Lead Producer; creative direction; sourced crew and talent; location scouting and art direction; audio editing and foley work; post-production supervisor
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home

import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Igfeed = () => {
  return (
    <div>
        <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            clientAccessToken='123|456'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
    </div>
  )
}

export default Igfeed
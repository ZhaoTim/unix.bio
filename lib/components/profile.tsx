import React, { useState, useEffect } from 'react'
import { useTheme, User, Link } from '@geist-ui/core'
import NextLink from 'next/link'
import ProfileLinks from './profile-links'
import { Configs } from '../utils'

const Profile: React.FC<unknown> = React.memo(() => {
  const theme = useTheme()
  const [showText, setShowText] = useState(theme.type === 'dark')
  useEffect(() => {
    const show = theme.type === 'dark'
    if (showText !== show) {
      setShowText(show)
    }
  }, [theme.type])

  return (
    <div className="profile">
      <div className="user">
        <NextLink href="/" passHref>
          <Link>
            <User className="global_avatar" src="/assets/avatar.png" name={Configs.author} altText="avatar">
              {Configs.summary}
            </User>
          </Link>
        </NextLink>
      </div>
      <ProfileLinks />
      <style jsx>{`
        .profile {
          padding: ${theme.layout.gap} 0;
        }

        .profile :global(.user) {
          padding-left: 0;
          margin-bottom: ${theme.layout.gapQuarter};
          max-width: 100%;
          overflow: hidden;
          
        }

        .profile :global(.user img)  {
          border-radius: 0 !important;
        }

        .profile :global(.user .avatar)  {
          padding: 5px;
          width: 40px;
          height: 40px;
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .profile {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
          }
        }

        .profile :global(.global_avatar) img {
          border-radius: 0;
        }
      `}</style>
    </div>
  )
})

export default Profile

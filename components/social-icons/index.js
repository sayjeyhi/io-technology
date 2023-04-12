import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Web from './web.svg'
import SlideDeck from './slide-deck.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Web, // from material ui icons
  'slide-deck': SlideDeck, // from material ui icons
}
const SocialIcon = ({ kind, href, size = 8, title, children, classNames, textClassNames }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="flex items-center text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      title={title}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current h-${size} w-${size} text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 ${classNames}`}
      />
      {children && <span className={`ml-1 ${textClassNames}`}>{children}</span>}
    </a>
  )
}

export default SocialIcon

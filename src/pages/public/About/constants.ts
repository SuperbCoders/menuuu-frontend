import {SOCIALS} from "../../../constants/socials";
import TwitterImage from '../../../assets/icons/social/twitter.svg';
import InstagramImage from '../../../assets/icons/social/instagram.svg';
import FacebookImage from '../../../assets/icons/social/facebook.svg';

interface AboutSocial {
    image: string,
    link: string,
    value: SOCIALS,
    alt: string,
}

export const AboutSocials: AboutSocial[] = [
    {
        image: TwitterImage,
        link: 'https://twitter.com',
        value: SOCIALS.TWITTER,
        alt: 'TWITTER_ALT',
    },
    {
        image: InstagramImage,
        link: 'https://www.instagram.com/',
        value: SOCIALS.INSTAGRAM,
        alt: 'INSTAGRAM_ALT',
    },
    {
        image: FacebookImage,
        link: 'https://www.facebook.com/',
        value: SOCIALS.FACEBOOK,
        alt: 'FACEBOOK_ALT',
    },
]
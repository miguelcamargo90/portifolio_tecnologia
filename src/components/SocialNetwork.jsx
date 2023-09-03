import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetwork.sass'


const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/miguel-leme-de-camargo-88887995/' },
    {name: 'github', icon: <FaGithub/>, url: 'https://github.com/miguelcamargo90'},
    {name: 'instagram', icon: <FaInstagram/>, url: 'https://www.instagram.com/mc_desenvolvimentoweb/'},
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href={network.url} className='social-btn' id={network.name} key={network.name} target="_blank"  rel="noopener noreferrer">
                {network.icon}
            </a>
        ))}
    </section>
  );
};

export default SocialNetworks
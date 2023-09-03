import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

import Avatar from '../img/perfil.jpeg'
import CvPdf from '../media/cv.pdf'

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='Miguel Camargo' />
      <p className='title'>Desenvolvedor de Sistemas e Web</p>
      <SocialNetwork />
      <InformationContainer />
      <a href={CvPdf} className='btn' target="_blank" rel="noopener noreferrer">
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar
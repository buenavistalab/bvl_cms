import React from 'react'
import Layout from "../components/Layout"
import './Clientes.scss'

import Bolden from '../../static/assets/clientes/Bolden.png'
import Schur from '../../static/assets/clientes/Familia-schurmann.png'
import Lastro from '../../static/assets/clientes/Lastro.png'
import Lumin from '../../static/assets/clientes/Lumin.png'
import Meridian from '../../static/assets/clientes/Meridian.png'
import RD from '../../static/assets/clientes/RD-Station.png'
import Uatt from '../../static/assets/clientes/Uatt.png'
import Voice from '../../static/assets/clientes/voice-of-the-oceans.png'
import Udesc from '../../static/assets/clientes/Udesc.jpg'

const Clientes = () => {
  return (
    <Layout>
      <div className="clientes-wrapper container">
        <h1>NOSSOS CLIENTES</h1>
        <div className="nossos-clientes-logos">
          <img src={Voice} alt="cliente logo" />
          <img src={Schur} alt="cliente logo" />
          <img src={Lastro} alt="cliente logo" />
          <img src={Lumin} alt="cliente logo" />
          <img src={Meridian} alt="cliente logo" />
          <img src={RD} alt="cliente logo" />
          <img src={Uatt} alt="cliente logo" />
          <img src={Bolden} alt="cliente logo" />
          <img src={Udesc} alt="cliente logo" />
        </div>
      </div>
    </Layout>
  )
}

export default Clientes

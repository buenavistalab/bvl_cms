import React from 'react'
import Layout from "../components/Layout"
import './Contato.scss'

const Contato = () => {
  return (
    <Layout>
      <div className="contato-wrapper container">
        <h1>Contato</h1>
        <p>
          Vamos conversar?
        </p>
        <div class="form-row">
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/contato-ok">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label>Seu nome: <input type="text" name="name" placeholder="Seu Nome" /></label>
            <label>Seu email: <input type="email" name="email" placeholder="seuemail@gmail.com" /></label>
            <label>Mensagem: <textarea name="message"
              placeholder="O seu texto aqui..."></textarea></label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contato

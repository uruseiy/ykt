import React from 'react'

import logo from '../images/logowhite.png'

const lorem =
  'Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.'

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <img className="img-fluid mx-auto d-block" src={logo} />
        </div>
      </div>

      <div className="row">
        <div className="row-sm col-md text-center">
          <a className="" href="#">
            <h3>About Us</h3>
          </a>
        </div>
        <div className="row-sm col-md text-center">
          <a className="" href="#">
            <h3>Our Capabilities</h3>
          </a>
        </div>
        <div className="row-sm col-md text-center">
          <a className="" href="#">
            <h3>Contact</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer">
    <div className="container">
      &copy; 2018 YKT Limited | YKT Limited trading as YKT Consulting
    </div>
  </div>
)

const Summary = () => (
  <div className="summary">
    <div className="container" href="#summary">
      <div className="row">
        <div className="row-sm col-md-8">
          <h1>About Us</h1>
          <hr />
          <div>{lorem}</div>
        </div>
        <div className="row-sm col-md">
          <div>Image will go here</div>
        </div>
      </div>
    </div>
  </div>
)

const DiamondIcon = ({ icon, color }) => (
  <li>
    <span
      className={`fa ${icon ? icon : 'fa-question'}`}
      style={{ color: color ? color : 'magenta' }}
    />
  </li>
)

const Detail = () => (
  <div className="detail">
    <div className="container" href="#detail">
      <div className="row">
        <div className="row-sm col-md diamondicons">
          <ul>
            <DiamondIcon icon="fa-project-diagram" color="green" />
            <DiamondIcon icon="fa-map-marked-alt" color="blue" />
            <DiamondIcon icon="fa-coins" color="lime" />
            <DiamondIcon icon="fa-cogs" color="red" />
            <DiamondIcon icon="fa-bezier-curve" color="yellow" />
            <DiamondIcon icon="fa-chart-line" color="orange" />
          </ul>
        </div>
        <div className="row-sm col-md-6">
          <h1>What We Do</h1>
          <hr />
          <div>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Capability = ({ icon, title, text }) => (
  <div className="row-sm col-md">
    <i className={`fas ${icon}`} />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
)

const Capabilities = () => (
  <div className="capabilities">
    <div className="container">
      <div className="row">
        <div className="row-sm col-md text-center">
          <h1>Our Capabilities</h1>
        </div>
      </div>
      <div className="row">
        <Capability
          title="Project Management"
          text={lorem}
          icon="fa-project-diagram"
        />
        <Capability title="Process Mapping" text={lorem} icon="fa-cogs" />
        <Capability title="Data Management" text={lorem} icon="fa-file-alt" />
      </div>
    </div>
  </div>
)

const ContactForm = () => (
  <div className="contact">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Contact Us</h1>
          <div>Contact Form</div>
        </div>
      </div>
    </div>
  </div>
)

const IndexPage = () => (
  <div>
    <Header />
    <Summary />
    <Detail />
    <Capabilities />
    <ContactForm />
    <Footer />
  </div>
)

export default IndexPage

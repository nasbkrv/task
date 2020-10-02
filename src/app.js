import React from 'react';
import './app.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import StepsMenu from './Components/StepsMenu'
import UserCardMenu from './Components/UserCardMenu'
import VerticalGrayForm from './Components/VerticalGrayForm'
import OrangeButton from './Components/OrangeButton'
import IconsMenu from './Components/IconsMenu'

export default function App() {

  return (
    <>
      <Header />
      <h1 className="title">Lorem ipsum dolor sit amet</h1>
      <StepsMenu />
      <h2 className="title">Curabitur ut facilisis arcu</h2>
      <UserCardMenu />
      <VerticalGrayForm />
      <OrangeButton />
      <IconsMenu />
      <Footer />
    </>
  );
}


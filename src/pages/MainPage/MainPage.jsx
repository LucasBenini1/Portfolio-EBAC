import { useState } from "react";
import UserContext from "../../context/UserContext";
import Header from "../../components/Header/header";
import Hero from "../../components/hero/hero";
import Resumo from "../../components/resumo/resumo";
import Experiencia from "../../components/experiencia/experiencia";
import Projetos from "../../components/projetos/projetos";
import Github from "../../components/github/github";
import Footer from "../../components/footer/footer";

export default function MainPage() {
  const [light, setLight] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  return (
    <UserContext.Provider value={{ light, setLight,setModalActive,modalActive }}>
      <Header />
      <Hero />
      <Resumo/>
      <Experiencia/>
      <Projetos/>
      <Github/>
      <Footer/>
    </UserContext.Provider>
  );
}

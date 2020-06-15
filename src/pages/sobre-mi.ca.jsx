// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from '../styles/sobremi.module.scss'

const SobreMi = (props) => (
  <Layout page={'sobremi'} >
    <SEO title="Sobre mí" />
    <h1>Sobre mí</h1>
    <p>Em dic Àlex Peracaula Ruiz, i vaig néixer el 7 de octubre de 1993 en Barcelona.
      La meva passió pel teatre va començar ben d'hora. Per influència majoritàriament
      del meu avi, vaig començar a fer teatre a l'escola i al grup de teatre 'La Teatral',
      pertanyent a 'La Caixa'. Allà vaig començar a aprendre a actuar des de la pràctica, 
      cada vegada enfrentant-me a personatges més interessants.</p>
 
     <p>Mantenint el teatre com un hobbie necessari, vaig estudiar Enginyeria Industrial a l'
       UPC de Barcelona i vaig acabar la carrera a l'Un
       Manteniendo el teatro como un hobbie necesario, estudié Ingeniería Industrial
       en la Universitat Politècnica de Catalunya y acabé la carrera en Irvine, California,
       donde podían convivir diariamente mis estudios con mi pasión por el surf. Tras volver a Europa,
       completé un Máster en Ingeniería en Energías Renovables en Lisboa, donde viví
       un año lleno de emociones. Allí fue donde me uní al grupo de teatro <a href="http://www.lisbonplayers.com.pt/site/">"The Lisbon Players"</a>,
       el grupo de teatro en inglés con más trayectoria de Portugal. Protagonizando dos
       de sus producciones, una obra original "The Stone Flower" y una producción de 
       "Much Ado About Nothing" de William Shakespeare, pude trabajar con diferentes dialectos ingleses
       y aplicar el conocimiento profesional que tenía del idioma encima de 
       las tablas. Esta experiencia me alentó a perseguir mi sueño, siempre presente, de ser actor.
     </p>

     <p>Por ello, volví a Barcelona en 2017, donde cursé la Formación Profesional 
       del Actor en el Estudi Nancy Tuñón-Jordi Oliver, donde he adquirido nuevos conocimientos
       tanto sobre mis mecanismos emocionales como actor, como sobre técnicas
       necesarias para la interpretación. Mis ganas y voluntad de actuar me han llevado a complementar
       esta formación con otra que considero más personal y que pasa por consumir teatro, cine,
       leer, escribir, participar en cortometrajes, obras de creación colectiva, cursos
       complementarios y, en definitiva, preocuparme por crecer como artista día a día.
       </p>
     
      <p>El deporte siempre ha estado presente durante mi vida, y el surf y el tenis son
        mis dos prácticas favoritas. También escribo poemas, que podéis ver en la sección de
        la web correspondiente, y actualmente llevo dos años trabajando como desarrollador
        web de forma paralela a la formación teatral.</p>


    <Link to="/">- Volver al inicio -</Link>
  </Layout>
)

export default SobreMi
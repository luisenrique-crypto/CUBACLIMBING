import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Trophy, Mountain, CalendarDays, Users, Medal, MapPin, Star, LogIn, UserPlus } from 'lucide-react';
import './styles.css';
import hero from './assets/hero.jpeg';

const routes = [
  {name:'Muro de la Jutía', location:'Viñales, Pinar del Río', grade:'5.10a', meta:'120 m · Deportiva', rating:'4.8'},
  {name:'El Diente', location:'Soroa, Artemisa', grade:'5.11b', meta:'100 m · Deportiva', rating:'4.7'},
  {name:'La Cabra', location:'Topes de Collantes', grade:'5.12a', meta:'90 m · Deportiva', rating:'4.9'},
  {name:'Bloque del Morro', location:'La Habana', grade:'V4', meta:'12 m · Boulder', rating:'4.6'},
];
const ranking = [
  ['Carlos Rodríguez','1,850'],['Luis Enrique','1,620'],['Ana Sofía','1,410'],['Jorge Luis','1,280'],['Pedro Álvarez','1,150']
];

function Layout({children}){
  return <div className="app">
    <header className="nav">
      <Link className="brand" to="/"><span>▲</span> CUBA<b>CLIMBING</b></Link>
      <nav className="navlinks">
        <Link to="/">Inicio</Link><Link to="/rutas">Rutas</Link><Link to="/ranking">Ranking</Link><Link to="/guias">Guías</Link><Link to="/comunidad">Comunidad</Link>
      </nav>
      <div className="auth"><Link className="btn ghost" to="/login"><LogIn size={16}/>Iniciar sesión</Link><Link className="btn solid" to="/registro"><UserPlus size={16}/>Crear cuenta</Link></div>
    </header>
    {children}
    <footer><div className="brand"><span>▲</span> CUBA<b>CLIMBING</b></div><p>Comunidad de escaladores. Escala. Registra. Supera tus límites.</p><small>© 2026 CUBACLIMBING</small></footer>
  </div>
}

function Home(){return <>
  <section className="hero" style={{backgroundImage:`linear-gradient(90deg, rgba(4,10,18,.88), rgba(4,10,18,.25)), url(${hero})`}}>
    <div className="heroInner"><h1>ESCALA.<br/>REGISTRA.<br/><span>SUPERA TUS LÍMITES.</span></h1><p>Únete a una comunidad de escaladores, registra tus encadenes, supera tus marcas y compite en el ranking.</p><div className="actions"><Link to="/rutas" className="btn solid"><Mountain size={18}/>Explorar rutas</Link><Link to="/ranking" className="btn ghost"><Trophy size={18}/>Ver ranking</Link><Link to="/guias" className="btn ghost"><CalendarDays size={18}/>Reservar con guía</Link></div></div>
  </section>
  <section className="features">
    {[[Medal,'Registra','Publica tus encadenes y comparte tus logros.'],[Trophy,'Compite','Suma puntos y sube en el ranking.'],[Mountain,'Explora','Descubre nuevas rutas y lugares.'],[CalendarDays,'Reserva','Agenda tu próxima aventura.'],[Users,'Comunidad','Conecta con otros escaladores.']].map(([I,t,d])=><div className="feature" key={t}><I/><h3>{t}</h3><p>{d}</p></div>)}
  </section>
  <section className="section"><div className="sectionHead"><h2>Rutas populares</h2><Link to="/rutas">Ver todas →</Link></div><div className="cards">{routes.map(r=><article className="card" key={r.name}><div className="grade">{r.grade}</div><div className="cardBody"><p><MapPin size={15}/>{r.location}</p><h3>{r.name}</h3><div className="meta"><span>{r.meta}</span><span><Star size={15}/> {r.rating}</span></div></div></article>)}</div></section>
  <section className="rankWrap"><div><h2>Ranking general</h2>{ranking.map((r,i)=><div className="rank" key={r[0]}><span className="pos">{i+1}</span><span>{r[0]}</span><b>{r[1]} pts</b></div>)}<Link className="btn ghost full" to="/ranking">Ver ranking completo</Link></div><div className="challenge"><Trophy size={46}/><h2>¿Listo para tu próximo reto?</h2><p>Únete a CUBACLIMBING y lleva tu pasión por la escalada al siguiente nivel.</p><Link className="btn solid" to="/registro">Crear cuenta gratis</Link></div></section>
</>}

function Placeholder({title, text}){return <section className="page"><h1>{title}</h1><p>{text}</p><Link className="btn solid" to="/">Volver al inicio</Link></section>}
function Auth({mode}){return <section className="page authPage"><div className="form"><h1>{mode==='login'?'Iniciar sesión':'Crear cuenta'}</h1><label>Email<input type="email" placeholder="tu@email.com"/></label><label>Contraseña<input type="password" placeholder="••••••••"/></label><button className="btn solid">{mode==='login'?'Entrar':'Crear cuenta'}</button><p className="muted">Esta pantalla ya está lista visualmente. La conectaremos a Supabase en el próximo paso.</p></div></section>}

function App(){return <BrowserRouter><Layout><Routes>
  <Route path="/" element={<Home/>}/><Route path="/rutas" element={<Placeholder title="Rutas" text="Aquí aparecerá el catálogo de rutas de escalada, filtros por provincia, grado y modalidad."/>}/><Route path="/ranking" element={<Placeholder title="Ranking" text="Ranking general, mensual y por dificultad con los encadenes de la comunidad."/>}/><Route path="/guias" element={<Placeholder title="Guías" text="Reservas con guías, fechas disponibles y experiencias de escalada."/>}/><Route path="/comunidad" element={<Placeholder title="Comunidad" text="Perfiles, publicaciones, encadenes y logros de los escaladores."/>}/><Route path="/login" element={<Auth mode="login"/>}/><Route path="/registro" element={<Auth mode="register"/>}/>
</Routes></Layout></BrowserRouter>}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

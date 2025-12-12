import Counter from './components/Counter'
import InputForm from './components/InputForm'
import RenderList from './components/RenderList'
import Toggle from './components/Toggle'
import FetchAPI from './components/FetchAPI'
import ProductCard from './components/ProductCard'
import BackgroundColor from './components/BackgroundColor'
import CharacterCount from './components/CharacterCount'
import EmailValidation from './components/EmailValidation'
import './App.css'

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>React Learning - 10 Komponen</h1>
      
      <Counter />
      <InputForm />
      <RenderList />
      <Toggle />
      <FetchAPI />
      <ProductCard />
      <BackgroundColor />
      <CharacterCount />
      <EmailValidation />
    </div>
  )
}

export default App

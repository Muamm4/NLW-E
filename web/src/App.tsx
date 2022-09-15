import './styles/index.css'
import logoImg from './assets/img/logo.svg'
import { MagnifyingGlassPlus, Heart, Horse } from 'phosphor-react'

function App() {
  return (
    <div className="mx-auto max-w-[1344px] flex flex-col items-center my-20">
      <img src={logoImg} alt="eSports" />
      <h1 className="text-6xl font-extrabold text-white mt-20 ">
        Seu{' '}
        <span className="bg-nlw-linear bg-clip-text text-transparent">Duo</span>{' '}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-4 mt-16">
        <a href="#" className=" relative rounded-lg overflow-hidden ">
          <img src="/game2.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block px-2">Dota 2</strong>
            <span className="text-zinc-300 text-sn block mt-1 px-2">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="#" className=" relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block px-2">
              Counter-Strike GO
            </strong>
            <span className="text-zinc-300 text-sn block mt-1 px-2">
              3 anúncios
            </span>
          </div>
        </a>
        <a href="#" className=" relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block px-2">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sn block mt-1 px-2">
              8 anúncios
            </span>
          </div>
        </a>
        <a href="#" className=" relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block px-2">APEX</strong>
            <span className="text-zinc-300 text-sn block mt-1 px-2">
              5 anúncios
            </span>
          </div>
        </a>
        <a href="#" className=" relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block px-2">
              Fortinite
            </strong>
            <span className="text-zinc-300 text-sn block mt-1 px-2">
              16 anúncios
            </span>
          </div>
        </a>
        <a href="#" className=" relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />
          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block px-2">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sn block mt-1 px-2">
              3 anúncios
            </span>
          </div>
        </a>
      </div>
      <div className="bg-[#2A2634] self-stretch mt-8 rounded-lg pt-1 bg-nlw-linear">
        <div className="bg-[#2A2634] px-8 py-6 self-stretch rounded-lg flex justify-between items-center">
          <div className="">
            <strong className="font-bold text-white block text-xl">
              Não Encontrou seu duo?
            </strong>
            <span className="text-zinc-300 text-sn block text-sm">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="bg-violet-500 rounded-lg text-white font-bold py-3 px-4 hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

import { heroes } from '../config/HeroList.js'
import { Game } from './classes/Game.js'
import { Hero } from './classes/Hero.js'
import { Monster } from './classes/Monster.js'

const chooseFighter = document.getElementById('chooseFighter')
const chooseMagician = document.getElementById('chooseMagician')
const chooseContainer = document.getElementById('choose')

chooseFighter.onclick = () => {
  startGame('Combattant')
}

chooseMagician.onclick = () => {
  startGame('Mage')
}

function startGame(role) {
  
  chooseContainer.classList.add('hidden')
  let game = new Game(role)

  const buttonHit = document.getElementById('hit')
  const buttonSkill = document.getElementById('skill')
  const buttonHeal = document.getElementById('heal')


  buttonHit.onclick = () => {
    game.play('hit')
  }
  buttonSkill.onclick = () => {
    game.play('useSkill')
  }
  buttonHeal.onclick = () => {
    game.play('heal')
  }
}
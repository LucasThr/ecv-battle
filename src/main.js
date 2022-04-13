import { heroes } from '../config/HeroList.js'
import { Game } from './classes/Game.js'
import { Hero } from './classes/Hero.js'
import { Monster } from './classes/Monster.js'



let game = new Game()

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
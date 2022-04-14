import { heroes } from "../../config/HeroList.js";
import { Hero } from "./Hero.js";
import { Monster } from "./Monster.js";

export class Game {
  kill = 0;
  hero;
  monster
  gameHistory = [
  ]
  turn = 0
  constructor(role) {
    console.log("okokoko", role);
    console.log('first', heroes.filter(hero => hero.type === role))
    this.hero = new Hero(heroes.filter(hero => hero.type === role)[0])
    this.turn = 0
    this.monster = new Monster()
    this.handleCanPlay()
    this.update()
  }


  update() {
    const monsterKill = document.getElementById('monsterKill')
    monsterKill.innerText = this.kill
    const turn = document.getElementById('turn')
    turn.innerText = this.turn


  }

  addToHistory(text) {

    this.gameHistory.push(new Date().getHours() + ':' + new Date().getMinutes() + ' - ' + text)
    let info = new Date().getHours() + ':' + new Date().getMinutes() + ' - ' + text
    const history = document.getElementById('history')
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(info);
    newDiv.appendChild(newContent);
    history.appendChild(newDiv)
    history.scrollTop = history.scrollHeight;
  }



  play(type) {
    if (type === "heal") this.heal()

    if (Math.floor(Math.random() * 100) <= 10) type = 'echec'
    if (type === "hit") this.hit()
    if (type === "useSkill") this.useSkill()
    if (type === "echec") this.addToHistory("Echec Critique")

    this.handleCanPlay()
    setTimeout(() => {
      let damage = this.monster.attack()
      let damageReceive = damage - this.hero.defense < 0 ? 0 : damage - this.hero.defense
      this.hero.life -= (damageReceive)
      this.addToHistory(this.monster.name + " vous inflige " + damageReceive + ' dégats')
      this.update()
      this.hero.update()

      this.handleCanPlay()

    }, 1500);

    if (this.hero.skill < 96) this.hero.skill += 5
    this.turn += 1
  }

  handleCanPlay() {
    const waiting = document.getElementById('waiting')
    waiting.classList.toggle('hidden')
    // waiting.hidden = !visible
  }

  hit() {
    let damage = this.hero.hit()
    this.addToHistory('Vous infligez ' + damage + ' dégats avec Frappe')
    this.handleAttack(damage)
  }

  handleAttack(damage) {
    let isDead = this.monster.receiveAttack(damage)
    if (isDead) {
      this.kill += 1
      this.hero.gold += 10
      this.hero.setXp(this.monster.level * 40)
      setTimeout(() => {
        this.monster = new Monster()
      }, 1000);
    }
    this.update()
  }

  useSkill() {
    let damage = this.hero.hitWithSkill()
    this.addToHistory('Vous infligez ' + damage + ' dégats avec votre compétence')
    this.handleAttack(damage)

  }

  heal() {
    if (this.potion <= 0) return null
    let heal = this.hero.heal()
    this.addToHistory('La potion vous rend ' + heal + ' points de vie')

  }



}
import { heroes } from "../../config/HeroList.js";
import { Hero } from "./Hero.js";
import { Monster } from "./Monster.js";

export class Game {
  kill = 0;
  hero;
  monster
  gameHistory = [
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
    'iuhghjklkjhgftyuj',
  ]
  constructor() {
    this.hero = new Hero(heroes[0])
    this.monster = new Monster()
    this.handleCanPlay()
    this.update()
  }


  update() {
    const monsterKill = document.getElementById('monsterKill')
    monsterKill.innerText = this.kill



  }

  addToHistory(text) {

    this.gameHistory.push(new Date().getHours() + ':' + new Date().getMinutes() + ' - ' + text)
    let info = new Date().getHours() + ':' + new Date().getMinutes() + ' - ' + text
    const history = document.getElementById('history')
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(info);
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    history.appendChild(newDiv)
    history.scrollTop = history.scrollHeight;

  }



  play(type) {
    if (Math.floor(Math.random() * 100) <= 10) type = 'echec'
    if (type === "hit") this.hit()
    if (type === "useSkill") this.useSkill()
    if (type === "heal") this.heal()
    if (type === "echec") this.addToHistory("Echec Critique")

    this.handleCanPlay()
    setTimeout(() => {
      let damage = this.monster.attack()
      this.addToHistory(this.monster.name + " vous inflige " + damage + ' dégats')
      console.log('damage', damage)
      this.hero.life -= damage
      console.log('this.life', this.hero.life)
      this.update()
      this.hero.update()

      this.handleCanPlay()

    }, 2000);

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
      this.hero.setXp(this.monster.level * 40)
      this.monster = new Monster()
    }
    this.update()
  }

  useSkill() {
    let damage = this.hero.hitWithSkill()
    this.addToHistory('Vous infligez ' + damage + ' dégats avec votre compétence')
    this.handleAttack(damage)

  }

  heal() {
    let heal = this.hero.heal()
    this.addToHistory('Vous vous soignez de ' + heal + ' points')

  }



}
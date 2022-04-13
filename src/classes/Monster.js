import { monsters } from "../../config/MonsterList.js";

export class Monster {
  life;
  level = 1;
  name;
  constructor() {
    let monster = monsters[Math.floor(Math.random() * (monsters.length - 1))]
    this.life = monster.life
    this.level = monster.level
    this.name = monster.name
    this.update()
  }

  update() {
    const monsterLife = document.getElementById('monsterLife')
    const monsterName = document.getElementById('monsterName')
    monsterLife.innerText = this.life
    monsterName.innerText = this.name
  }

  attack() {
    console.log('this.level', this.level)
    return Math.floor(Math.random() * 10 * this.level)
  }

  receiveAttack(value) {
    this.life -= value
    this.update()
    if (this.life <= 0) return true
  }

}
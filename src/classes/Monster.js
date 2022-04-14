import { monsters } from "../../config/MonsterList.js";

export class Monster {
  life;
  level = 1;
  name;
  maxLife;
  image;
  damage
  constructor() {
    let monster = monsters[Math.floor(Math.random() * (monsters.length))]
    this.life = monster.life
    this.level = monster.level
    this.name = monster.name
    this.maxLife = monster.life
    this.image = monster.image
    this.damage = monster.damage
    this.update()
  }

  update() {
    const monsterLife = document.getElementById('monsterLife')
    const monsterMaxLife = document.getElementById('monsterMaxLife')
    // const monsterName = document.getElementById('monsterName')
    const monsterImage = document.getElementById('monsterImage')
    const monsterLifeBar = document.getElementById('monsterLifeBar')

    var img = document.createElement("img");
    img.src = this.image;
    monsterLifeBar.className = `h-4 w-[${ (100 * this.life) / this.maxLife}%] bg-red-700 rounded-xl`
    monsterLife.innerText=this.life
    monsterMaxLife.innerText=this.maxLife
    if(this.life===0) {
      monsterImage.classList.add('opacity-0')
      monsterImage.classList.remove('opacity-100')
    } else {
      monsterImage.classList.remove('opacity-0')
      monsterImage.classList.add('opacity-100')
    }
    monsterImage.src = this.image;
  }

  attack() {
    return this.damage
  }

  receiveAttack(value) {
    this.life -= value
    if (this.life <= 0) this.life = 0
    this.update()
    if (this.life <= 0) return true
  }

}
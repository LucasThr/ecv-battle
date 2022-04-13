export class Hero {
  xp;
  life;
  level;
  maxXp;
  defense;
  damage;
  skillDamage;
  skill;

  constructor(hero) {
    this.xp = hero.xp
    this.level = hero.level
    this.defense = hero.defense
    this.skillDamage = hero.skillDamage
    this.damage = hero.damage
    this.skill = hero.skill
    this.life = hero.life
    this.maxXp = 100
    this.update()
  }

  update() {
    const skill = document.getElementById('textSkill')
    const level = document.getElementById('level')
    const life = document.getElementById('life')
    const xp = document.getElementById('xp')
    const maxXp = document.getElementById('maxXp')
    level.innerText = this.level
    skill.textContent = this.skill
    life.textContent = this.life
    xp.textContent = this.xp
    maxXp.textContent = this.maxXp
  }

  hit() {
    console.log('this.level', this.level)
    let randomDamage = Math.floor(Math.random() * (this.damage * 10))
    console.log('randomDamage', randomDamage)
    this.update()
    return randomDamage
  }

  hitWithSkill() {
    if (this.skill <= 0) return
    this.skill -= 20
    let randomDamage = Math.floor(Math.random() * (this.skillDamage * 20))
    this.update()
    return randomDamage
  }

  heal() {
    let healAmount = Math.floor(Math.random() * (50))
    this.life += healAmount
    if(this.life>100)this.life=100
    this.update()
    return healAmount
  }

  setXp(xp) {
    this.xp += xp
    if (this.xp >= this.maxXp) {
      this.level += 1
      let remainingXp = this.xp - this.maxXp
      this.xp = 0
      this.maxXp = 100 + this.level * 50

      if (remainingXp !== 0) this.setXp(remainingXp)
    }
    this.update()
  }

  setSkill(value) {
    this.value = value
    this.update()
  }

}
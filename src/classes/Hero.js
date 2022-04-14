export class Hero {
  xp;
  life;
  level;
  maxXp;
  defense;
  damage;
  skillDamage;
  skill;
  type;
  gold = 0;
  skillName
  skillCoolDown;
  potion = 1
  constructor(hero) {
    this.xp = hero.xp
    this.level = hero.level
    this.defense = hero.defense
    this.skillDamage = hero.skillDamage
    this.damage = hero.damage
    this.skill = hero.skill
    this.life = hero.life
    this.maxXp = 100
    this.type = hero.type
    this.skillName = hero.skillName
    this.update()
  }

  update() {
    const skill = document.getElementById('textSkill')
    const type = document.getElementById('type')
    const level = document.getElementById('level')
    const life = document.getElementById('life')
    const xp = document.getElementById('xp')
    const maxXp = document.getElementById('maxXp')
    const gold = document.getElementById('gold')
    const skillName = document.getElementById('skill')
    const potion = document.getElementById('potion')
    potion.innerText = this.potion
    level.innerText = this.level
    skill.textContent = this.skill
    life.textContent = this.life
    xp.textContent = this.xp
    maxXp.textContent = this.maxXp
    type.textContent = this.type
    gold.textContent = this.gold
    skillName.textContent = this.skillName
  }

  hit() {
    let randomDamage = this.damage
    this.update()
    return randomDamage
  }

  hitWithSkill() {
    if (this.skill <= 0) return
    this.skill -= 20
    let randomDamage = this.skillDamage
    this.update()
    return randomDamage
  }

  heal() {
    let healAmount = Math.floor(Math.random() * (60 - 40) + 40)
    this.life += healAmount
    if (this.life > 100) this.life = 100
    this.potion-=1
    this.update()
    return healAmount
  }

  updateStats(){
    this.maxLife+=10
    this.defense+=2
    this.damage+=3
    this.skillDamage+=5
  }

  setXp(xp) {
    this.xp += xp
    if (this.xp >= this.maxXp) {
      this.level += 1
      this.skill = 100
      this.updateStats()
      let remainingXp = this.xp - this.maxXp
      this.xp = 0
      this.maxXp = 100 + this.level * 50
      if (this.gold >= 30) {
        if (confirm('Veux-tu acheter une potion de soin ? ( 30 golds ) ')) {
          this.potion+=1
          this.gold-=30
        }
      }
      if (remainingXp !== 0) this.setXp(remainingXp)
    }
    this.update()
  }

  setSkill(value) {
    this.value = value
    this.update()
  }

}
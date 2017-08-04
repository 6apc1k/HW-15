function Player(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;
}


Player.prototype.getHitpoints = function() {
    return this.hitpoints;
}

Player.prototype.setHitpoints = function(newHP) {
    this.hitpoints = newHP > this.totalHitpoints ? this.totalHitpoints : newHP;
}

Player.prototype.getTotalHitpoints = function() {
    return this.totalHitpoints;
}

Player.prototype.setTotalHitpoints = function(newTotalHP) {
    if (newTotalHP >= this.totalHitpoints) {
        this.totalHitpoints = newTotalHP;
    } else if (newTotalHP > 0 && newTotalHP < this.totalHitpoints) {
        if (newTotalHP >= this.hitpoints) {
            this.totalHitpoints = newHP;
        } else {
            this.hitpoints = newTotalHP;
            this.totalHitpoints = newTotalHP;
        }
    }
}

Player.prototype.getAttack = function() {
    return this.attack;
}

Player.prototype.setAttack = function(newAttack) {
    this.attack = newAttack;
}

Player.prototype.fight = function(player) {
    if (player.block === true) {
        console.log('Block has been used');
        player.block = false;
    } else if (player instanceof Player) {
        if (this.attack > player.hitpoints || this.attack == player.hitpoints) {
            player.hitpoints = 0;
            console.log(`${player.name} is dead`);
        } else {
            player.hitpoints -= this.attack;
        }
    } else {
        console.log('We cannot fight');
    }
}

Player.prototype.isAlive = function() {
    return !!this.hitpoints;
}

function Champion(obj) {
    Player.call(this, obj);
    this.pet = false;
}
Champion.prototype = Object.create(Player.prototype);
Champion.prototype.constructor = Champion;

function Monster(obj) {
    Player.call(this, obj);
}
Monster.prototype = Object.create(Player.prototype);
Monster.prototype.constructor = Monster;

Champion.prototype.rest = function() {
    var regen = 5;
    this.setHitpoints(this.hitpoints + regen);
}

Champion.prototype.defence = function() {
    this.block = true;
}

/**
 * Creating Pet for Champion
 * @param {Object} this.pet Creating new instance of Pet.
 * @param {function} this.pet.show Displaying image for Pet.
 */

Champion.prototype.callPet = function() {
    this.pet = new Pet({
        name: 'Unicorn',
        attack: 25,
        hitpoints: 100
    });
    this.pet.show("https://media.giphy.com/media/lxmMZwWoMKxPi/giphy.gif");
}

/**
 * Implementing Pet Fight
 * @param {function} this.pet.fight Calling fight for Pet.
 * @param {function} this.pet.show Displaying image for Pet. 
 */

Champion.prototype.petFight = function(player) {
    this.pet.fight(player);
    this.pet.show("https://media.giphy.com/media/NVvs0OJ3Dw7vi/giphy.gif");
}

Monster.prototype.enrage = function() {
    this.rage = 2;
}

Monster.prototype.fight = function(player) {
    if (player.hitpoints) {
        if (this.rage) {
            this.attack *= 2;
            Player.prototype.fight.call(this, player);
            this.attack /= 2;
            this.rage--;
        } else {
            Player.prototype.fight.call(this, player);
        }
        if (!player.isAlive()) {
            var newHP = this.hitpoints + Math.floor(player.totalHitpoints * 0.25);
            var newTotalHP = this.totalHitpoints + Math.floor(player.totalHitpoints * 0.1);
            this.setHitpoints(newHP);
            this.setTotalHitpoints(newTotalHP);
        }
    } else {
        Player.prototype.fight.call(this, player)
    }
}

Champion.prototype.fight = function(player) {
    Player.prototype.fight.call(this, player);
    if (!player.isAlive()) {
        this.attack++;
    }
}

/** Class for a Pet, which has Player prototype. */
function Pet(obj) {
    Player.call(this, obj);
}

Pet.prototype = Object.create(Player.prototype);
Pet.prototype.constructor = Pet;


/**
 * Creating console method to display images
 * @param  {string} url String woth picture url
 * @param  {number} scale Image size multiplier. 
 */
Pet.prototype.show = function(url, scale) {
    scale = scale || 1;
    var img = new Image();
    img.onload = function() {
        var w = this.width * scale,
            h = this.height * scale;
        console.log("%c", "font-size: 1px; padding: " + Math.floor(h / 2) + "px " + Math.floor(w / 2) + "px; line-height: " + h + "px;" + "background: url(" + url + "); background-size: " + w + "px " + h + "px; color: transparent;");
    };
    img.src = url;
};


var Sasha = new Monster({
    name: 'Sasha',
    attack: 80,
    hitpoints: 50
});
var Lusia = new Champion({
    name: 'Lusia',
    attack: 25,
    hitpoints: 100
});



module.exports = {
    Player: Player,
    Champion: Champion,
    Monster: Monster,
    Pet: Pet
}
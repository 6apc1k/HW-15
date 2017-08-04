    function Pokemon (obj) {
        this.weight = obj.weight; 
        this.height = obj.height;
        this.type = 'Fire'; 
        this.canWalk = true;
        this.evolveMap = {
            Charmander: {
                'level 16': function (obj) { Object.assign(this, new Charmeleon(obj));},
                'level 36': function (obj) { Object.assign(this, new Charizard(obj)); }
            },
            Slowpoke: {
                'level 37': function (obj) { Object.assign(this, new Slowbro(obj));},
                'trade': function (obj) { Object.assign(this, new Slowking(obj));}
            },
             Pichu: {
                'happiness': function (obj) { Object.assign(this, new Pikachu(obj));},
                'thunderStone': function (obj) { Object.assign(this, new Raichu(obj));}
            },
             Eevee: {
                'waterStone': function (obj) { Object.assign(this, new Vaporeon(obj));},
                'thunderStone': function (obj) { Object.assign(this, new Jolteon(obj));},
                'fireStone': function (obj) { Object.assign(this, new Flareon(obj));}
            }
        }

    }

    Pokemon.prototype.evolve = function (rule) {
        var mappedData = this.evolveMap[this.origin] && this.evolveMap[this.origin][rule];
        if (mappedData) {
            mappedData.call(this, { weight: this.weight * 1.5, height: this.height * 1.5 });
        }
    }

    Pokemon.prototype.getType = function () {
        return this.type;
    }

    Pokemon.prototype.getSpecie = function () {
        return this.specie;
    }

    Pokemon.prototype.getHeight = function () {
        return this.height;
    }

    Pokemon.prototype.getWeight = function () {
        return this.weight; 
    }

    Pokemon.prototype.getPokemonType = function () {
        return this.pokemonType; 
    }

    function Charmander (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Lizard Pokemon';
        this.origin = 'Charmander';
        this.pokemonType = 'Charmander';
    }
    Charmander.prototype = Object.create(Pokemon.prototype);

    function Charmeleon (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Fire Pokemon'; 
        this.origin = 'Charmander'; 
        this.pokemonType = 'Charmeleon';
    }
    Charizard.prototype = Object.create(Pokemon.prototype);

    function Charizard (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Fire Pokemon';
        this.flying = true;
        this.origin = 'Charmander';
        this.pokemonType = 'Charizard';
    }


    Charmeleon.prototype = Object.create(Pokemon.prototype);

        function Pichu (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Mouse Pokemon';
        this.origin = 'Pichu';
        this.pokemonType = 'Pichu';
        this.type = 'Electric';
    }

    Pichu.prototype = Object.create(Pokemon.prototype);

        function Pikachu (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Mouse Pokemon';
        this.origin = 'Pichu';
        this.pokemonType = 'Pikachu';
        this.type = 'Electric';
    }
    Pikachu.prototype = Object.create(Pokemon.prototype);

        function Raichu (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Mouse Pokemon';
        this.origin = 'Pichu';
        this.pokemonType = 'Raichu';
        this.type = 'Electric';
    }
    Raichu.prototype = Object.create(Pokemon.prototype);

        function Eevee (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Evolution Pokemon';
        this.origin = 'Eevee';
        this.pokemonType = 'Eevee';
        this.type = 'Normal';
    }
    Eevee.prototype = Object.create(Pokemon.prototype);

        function Vaporeon (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Evolution Pokemon';
        this.origin = 'Eevee';
        this.pokemonType = 'Vaporeon';
        this.type = 'Water';
    }
    Vaporeon.prototype = Object.create(Pokemon.prototype);

        function Flareon (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Evolution Pokemon';
        this.origin = 'Eevee';
        this.pokemonType = 'Flareon';
        this.type = 'Fire';
    }
   Flareon.prototype = Object.create(Pokemon.prototype);

        function Jolteon (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Evolution Pokemon';
        this.origin = 'Eevee';
        this.pokemonType = 'Jolteon';
        this.type = 'Electric';
    }
   Jolteon.prototype = Object.create(Pokemon.prototype);

        function Slowpoke (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Fire Pokemon';
        this.psychihc = true;
        this.origin = 'Slowpoke';
        this.pokemonType = 'Slowpoke';
        this.type = 'Water';
    }
    Slowpoke.prototype = Object.create(Pokemon.prototype);

        function Slowking (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Fire Pokemon';
        this.psychihc = true;
        this.origin = 'Slowpoke';
        this.pokemonType = 'Slowking';
        this.type = 'Water/Psychic';
    }
    Slowking.prototype = Object.create(Pokemon.prototype);

        function Slowbro (obj) {
        Pokemon.call(this, obj);
        this.specie = 'Fire Pokemon';
        this.psychihc = true;
        this.origin = 'Slowpoke';
        this.pokemonType = 'Slowbro';
        this.type = 'Water/Psychic';
    }
    Slowking.prototype = Object.create(Pokemon.prototype);

    var animal = new Charmander({ height: 123, weight: 321});

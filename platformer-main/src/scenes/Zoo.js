class Zoo extends Tableau{

    preload() {
        super.preload();
        this.load.image('star', 'assets/star.png');
        this.load.image('monster-violet', 'assets/monster-violet.png');
        this.load.image('monstre2', 'assets/monstre2.png');
        this.load.image('monstre3', 'assets/monstre3.png');
        this.load.image('monstre4', 'assets/monstre4.png');
        this.load.image('monstre5', 'assets/monstre5.png');
        this.load.image('monster-fly', 'assets/monster-fly.png');


    }
    create() {
        super.create();
        
        //etoile
        this.star3=this.physics.add.sprite(900,100,"star");
        this.star3.setCollideWorldBounds(true);
        this.star3.setBounce(1);
        this.physics.add.overlap(this.player, this.star3, this.ramasserEtoile, null, this);


        this.physics.add.overlap(this.player, this.stars, this.ramasserEtoile, null, this);

        new MonsterFly(this,400,100);
        new monstreviolet(this,50,350);
        new monstre2(this,50,350);
        new monstre3(this,40,350);

        
    }

}


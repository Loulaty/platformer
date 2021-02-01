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
        new monstreviolet(this,100,100);
        
        /*monstre2
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-250,"monstre2");
        this.monstre.setOrigin(10,0);
        this.monstre.setDisplaySize(40,100);
        this.monstre.setCollideWorldBounds(true); 
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(100);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        //monstre3
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-50,"monstre3");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(60,100);
        this.monstre.setCollideWorldBounds(true); 
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(50);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);

        //monstre4
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-1000,"monstre4");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(64,64);
        this.monstre.setCollideWorldBounds(true); 
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(50);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
    
        //monstre5
        this.monstre=this.physics.add.sprite(300,this.sys.canvas.height-1000,"monstre5");
        this.monstre.setOrigin(0,0);
        this.monstre.setDisplaySize(15,15);
        this.monstre.setCollideWorldBounds(true); 
        this.monstre.setBounce(1);
        this.monstre.setVelocityX(600);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
        */


    }

}


class monstre2 extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "monstre2");
        this.body.allowGravity=true;

        this.setOrigin(10,0);

        this.setDisplaySize(40,100);
        this.setVelocityX(100);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.physics.add.overlap(this.player, this.monstre, this.hitSpike, null, this);
    }

}


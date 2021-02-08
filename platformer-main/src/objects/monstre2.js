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

        this.setOrigin(20,30);

        this.setDisplaySize(64,64);
        this.setVelocityX(60);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
    }

}


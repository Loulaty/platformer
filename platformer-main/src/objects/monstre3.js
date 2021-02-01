class monstre3 extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "monstre3");
        this.body.allowGravity=true;

        this.setOrigin(10,0);

        this.setDisplaySize(40,100);
        this.setVelocityX(50);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
    }

}

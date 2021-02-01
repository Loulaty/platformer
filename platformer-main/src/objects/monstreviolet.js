class monstreviolet extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "monster-violet");
        //pas de gravité
        this.body.allowGravity=false;

        this.setDisplaySize(64,64);
    }

}



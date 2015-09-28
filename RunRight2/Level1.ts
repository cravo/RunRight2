module RunRight {

    export class Level1 extends Phaser.State {

        map: Phaser.Tilemap;

        create() {

            this.map = this.game.add.tilemap('mapLevel1', 16, 16, 50, 32);
            this.map.addTilesetImage('tiles', 'tiles');
            this.map.createLayer('layer1').resizeWorld();
        }
    }
}
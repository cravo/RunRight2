module RunRight {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
            this.preloadBar.anchor.setTo(0.5, 0.5);

            this.load.setPreloadSprite(this.preloadBar);

            // Load assets
            this.load.image('logo', 'title.png');
            this.load.tilemap('mapLevel1', 'level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'tiles.png');

        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {

            this.game.state.start('MainMenu', true, false);
        }
    }
}
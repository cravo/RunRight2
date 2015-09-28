module RunRight {

    export class Boot extends Phaser.State {

        preload() {
            this.load.image('preloadBar', 'loader.png');
        }

        create() {

            this.input.maxPointers = 1; // don't care about multi-touch

            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                // desktop-specific settings
                this.scale.pageAlignHorizontally = true;
            }
            else {
                // mobile-specific settings
            }

            this.game.state.start('Preloader', true, false);
        }
    }
}
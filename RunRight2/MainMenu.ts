module RunRight {

    export class MainMenu extends Phaser.State {

        logo: Phaser.Sprite;

        create() {

            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);

            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() {

            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Exponential.Out, true);
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {

            this.game.state.start('Level1', true, false);
        }
    }
}
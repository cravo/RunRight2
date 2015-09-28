/// <reference path="phaser.d.ts"/> 
window.onload = function () {
    var game = new RunRight.Game();
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RunRight;
(function (RunRight) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1; // don't care about multi-touch
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                // desktop-specific settings
                this.scale.pageAlignHorizontally = true;
            }
            else {
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    RunRight.Boot = Boot;
})(RunRight || (RunRight = {}));
var RunRight;
(function (RunRight) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', RunRight.Boot, false);
            this.state.add('Preloader', RunRight.Preloader, false);
            this.state.add('MainMenu', RunRight.MainMenu, false);
            this.state.add('Level1', RunRight.Level1, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    RunRight.Game = Game;
})(RunRight || (RunRight = {}));
var RunRight;
(function (RunRight) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        return Level1;
    })(Phaser.State);
    RunRight.Level1 = Level1;
})(RunRight || (RunRight = {}));
var RunRight;
(function (RunRight) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Exponential.Out, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    RunRight.MainMenu = MainMenu;
})(RunRight || (RunRight = {}));
var RunRight;
(function (RunRight) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
            this.preloadBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);
            // Load assets
            this.load.image('logo', 'title.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    RunRight.Preloader = Preloader;
})(RunRight || (RunRight = {}));
//# sourceMappingURL=game.js.map
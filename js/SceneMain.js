class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        //load our images or sounds(load all resources)
        //this.load.image("key","path")
        //this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
        //this.load.audio('cat', ['sounds/meow.mp3']);
        this.load.image("apple", "images/apple.png");
        // this.load.image('ground', 'images/ground.png');
    }
    create() {
        //define our objects 

        console.log("Ready!");
        Align.scaleToGameW(apple,.5);
        Align.center(apple);


        //this.char = this.add.sprite(0, game.config.height / 2, "boy")
        //var frameNames = this.anims.generateFrameNumbers('boy');


        // this.apple=this.physics.add.sprite(240 , 300, 'apple');
        // this.apple.setGravityY(200);
        
        // this.ground = this.physics.add.sprite(240, 600, 'ground');
        // this.physics.add.collider(this.apple, this.ground);
        // this.ground.setImmovable();

        // this.apple.setBounce(0, 0.5);
        // this.input.on('pointerdown',this.moveApple, this);

        // moveApple()
        // {
        //     this.apple.setVelocity(0, -200);
        // }

        //var appleCon=this.add.container();

       // for(var i=0; i<4; i++){
        //    var xx=Phaser.Math.Between(100,400);
          //  var yy=Phaser.Math.Between(100,400);
            //var apple = this.add.image(xx,yy,"apple");
            //appleCon.add(apple);
       // }

    //     testObj=appleCon;

    //     this.anims.create({
    //         key: 'walk',
    //         frames: frameNames,

    //         frameRate: 8,
    //         repeat: -1
    //     });

    //     this.char.play('walk');
    //     this.doWalk();

    //     this.graphics = this.add.graphics();
    //     this.graphics.lineStyle(8, 0xff0000);
    //     this.graphics.fillStyle(0xff00ff, .5);
    //     this.graphics.strokeCircle(100, 200, 60)
    //     this.graphics.fillCircle(100, 200, 60);

    //     this.catSound = this.sound.add('cat');
    //     this.catSound.play();

    //     this.text1 = this.add.text(game.config.width / 2, game.config.height / 2, "You Won!", { fontFamily: 'Anton', color: '#ff0000', fontSize: '50px' });
    //     this.text1.setOrigin(0.5, 0.5);
    // }
    // doWalk() {
    //     this.tweens.add({
    //         targets: this.char,
    //         duration: 5000,
    //         x: game.config.width,
    //         y: 0,
    //         alpha: 0,
    //         onComplete: this.onCompleteHandler.bind(this),
    //         /* Act on the event */
    //     });
    // }

    // onCompleteHandler(tween, targets, custom) {
    //     var char = targets[0];
    //     char.x = 0;
    //     char.y = game.config.height / 2;
    //     char.alpha = 1;
    //     this.doWalk();
    // }

    }
    update() {
        //constant running loop if we need constant update

    }
}
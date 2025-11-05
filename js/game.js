class NoiseScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key : 'NoiseScene'});
    }
    preload ()
    {
       this.load.image('image', './assets/bild.png');
       this.load.image('tile', './assets/gradientTiles.png');

    }

    create ()
    {
        
    
        var camera = this.cameras.main;
        //this.add.image(0, 0, 'image');
        const map = this.make.tilemap({tileWidth: 1, tileHeight: 1, width: 500, height: 400  });
        const tileset = map.addTilesetImage('tile');
        const layer = map.createBlankLayer(0, tileset, 0, 0);
        layer.setScale(4);
        layer.randomize(0, 0, map.width, map.height, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 23, 24, 25 ]);
        camera.setZoom(1);
        console.log(map)
        this.cameras.main.setBounds();

    }

    update ()
    {
       
    }
}

var config = {
    type: Phaser.AUTO,
    inputTouch: true,
    pixelArt: true,
    scrolling: false,
    backgrundColor: '#c52222ff',
    scene: NoiseScene,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1200,
        height: 600,
        expandParent: true,
        resizeInterval: 50,
      },
};

var game = new Phaser.Game(config);
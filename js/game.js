import { noise_generator } from './noise.js';
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
        

        const mapWidth = 500;
        const mapHeight = 400;
        const map = this.make.tilemap({tileWidth: 1, tileHeight: 1, width: mapWidth, height: mapHeight});
        const tileset = map.addTilesetImage('tile');
        const layer = map.createBlankLayer(0, tileset, 0, 0);
        layer.setScale(4);

        const gen = new noise_generator();

        gen.seed("wfrwgw5");

        const opts = { scale: 40, octaves: 4, persistence: 0.5, lacunarity: 2 };

        const tilesCount = (tileset && tileset.total) ? tileset.total : 26;

        for(let y = 0; y < mapHeight; y++){
            for(let x = 0; x < mapWidth; x++){
                const v = gen.noise(x, y, opts);
                const index = Math.floor(v * (tilesCount - 1));
                layer.putTileAt(index+5, x, y);
            }
        }
        
        const camera = this.cameras.main;
        camera.setZoom(1);
        //this.cameras.main.setBounds();
        //const tileset = map.addTilesetImage('tile');
        //const layer = map.createBlankLayer(0, tileset, 0, 0);
        //layer.setScale(4);
        //layer.randomize(0, 0, map.width, map.height, [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 23, 24, 25 ]);
        //camera.setZoom(1);
        //console.log(map)
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
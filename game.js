const config = {
    type: Phaser.Auto,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
     }
}

const game = new Phaser.Game(config);
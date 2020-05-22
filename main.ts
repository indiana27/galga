sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 3 3 . . . . 3 . . . . . 
. . . . . a a a a a a 3 . . . . 
. . . . 3 3 . . . . 3 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    spacePlane.destroy()
    info.changeLifeBy(-1)
    spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 4 4 4 4 4 4 . . . . . . . 
. 2 2 4 9 5 4 8 . 4 . . . . . . 
2 2 2 4 9 9 9 8 8 4 4 . . . . . 
. 2 2 2 5 5 5 5 5 5 4 4 . . . . 
2 2 2 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 . . . . . . 4 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    spacePlane.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(spacePlane)
})
let dart: Sprite = null
let bogey: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 4 4 4 4 4 4 . . . . . . . 
. 2 2 4 9 5 4 8 . 4 . . . . . . 
2 2 2 4 9 9 9 8 8 4 4 . . . . . 
. 2 2 2 5 5 5 5 5 5 4 4 . . . . 
2 2 2 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 . . . . . . 4 4 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane)
spacePlane.setVelocity(200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 2 6 2 6 . . . . . 
. . . . . . 2 6 f 6 2 . . . . . 
. . . . . . 6 f 6 f 6 . . . . . 
. . . . . . 2 6 f 6 2 . . . . . 
. . . . . . 6 2 6 2 6 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-52, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})

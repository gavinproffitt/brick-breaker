namespace SpriteKind {
    export const edge = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const top = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const pu = SpriteKind.create()
    export const health = SpriteKind.create()
    export const money = SpriteKind.create()
    export const exball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    num_bricks += -1
})
function build_set_bricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            create_brick(index * 16 + 32, coll * 8 + 24)
            coll += 1
        }
        coll = 0
    }
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.health, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 200)
    if (info.life() < 3) {
        info.changeLifeBy(1)
    } else {
        info.changeScoreBy(20)
    }
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    num_bricks += -1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(num_bricks))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
function create_brick (x: number, y: number) {
    rand_num = Math.randomRange(0, 15)
    if (rand_num <= 2) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        brick2.setPosition(x, y)
        num_bricks += 1
    } else if (rand_num >= 9) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        brick2.setPosition(x, y)
        num_bricks += 1
    } else if (rand_num == 4) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 7 7 2 2 2 2 2 7 7 2 2 2 f 
f 2 7 2 2 7 2 2 2 7 2 2 7 2 2 f 
f 2 7 2 2 2 2 2 2 7 2 2 2 2 2 f 
f 2 2 7 7 2 2 2 2 2 7 7 2 2 2 f 
f 2 2 2 2 7 2 2 2 2 2 2 7 2 2 f 
f 2 2 7 7 2 2 2 2 2 7 7 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.money)
        brick2.setPosition(x, y)
        num_bricks += 1
    } else if (rand_num == 5) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 7 7 2 2 2 2 2 7 7 2 2 2 f 
f 2 7 2 2 7 2 2 2 7 2 2 7 2 2 f 
f 2 7 2 2 2 2 2 2 7 2 2 2 2 2 f 
f 2 2 7 7 2 2 2 2 2 7 7 2 2 2 f 
f 2 2 2 2 7 2 2 2 2 2 2 7 2 2 f 
f 2 2 7 7 2 2 2 2 2 7 7 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.money)
        brick2.setPosition(x, y)
        num_bricks += 1
    } else if (rand_num == 6) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 3 3 2 3 3 2 2 3 3 2 3 3 2 f 
f 2 3 3 3 3 3 2 2 3 3 3 3 3 2 f 
f 2 2 3 3 3 2 2 2 2 3 3 3 2 2 f 
f 2 2 2 3 2 2 2 2 2 2 3 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.health)
        brick2.setPosition(x, y)
        num_bricks += 1
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
        brick2.setPosition(x, y)
        num_bricks += 1
    }
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.money, function (sprite, otherSprite) {
    info.changeScoreBy(30)
    otherSprite.destroy(effects.rings, 200)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    num_bricks += -1
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy >= -150) {
        sprite.vy += -5
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
let brick2: Sprite = null
let rand_num = 0
let coll = 0
let num_bricks = 0
info.setScore(0)
info.setLife(3)
let start_ball_var = 0
scene.setBackgroundColor(8)
let paddle = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.top)
top.setPosition(80, 0)
let laft = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
laft.setPosition(0, 60)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.edge)
right.setPosition(159, 60)
let ball_var = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
num_bricks = 0
coll = 0
build_set_bricks()
game.onUpdate(function () {
    if (start_ball_var == 0) {
        ball_var.setPosition(paddle.x, 105)
        ball_var.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            start_ball_var = 1
        }
    }
    if (start_ball_var == 1) {
        ball_var.setVelocity(Math.randomRange(-30, 30), -50)
        start_ball_var = 2
    }
    if (ball_var.y > 115) {
        start_ball_var = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (num_bricks <= 0) {
        num_bricks = 0
        start_ball_var = 0
        effects.confetti.startScreenEffect()
        pause(200)
        effects.confetti.endScreenEffect()
        build_set_bricks()
        info.changeScoreBy(100)
    }
})

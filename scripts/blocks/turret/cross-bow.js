const basicCrossBow = extend(ItemTurret, "crossbow", {
    health: 430,
    size: 2,
    targetAir: true,
    targetGround: true,
    inaccuracy: 3.5,
    reloadTime: 40,
    rotateSpeed: 9,
    range: 220,
    description: "A long, powerful tower, shoot with decent speed (wip)\n[accent]Shoot an powerful bolt every 3rd shoot, penetrate though all enermy.",
})
---
layout: "../../layouts/BlogPost.astro"
title: "I wrote Pong in Rust and why you should too"
description: "I researched the availability of Rust libraries for game development and wrote Pong in Rust. Here's why you should too."
pubDate: "August 27, 2023"
readingTime: '123'
---

## How did I get here?

<br/>

This year I graduated university, and my graduation project was a game written with Unity. Even tho C# is a okay-ish language, it wasn't the best experience for me, so i decided to look for alternatives. What is better alternative to "Microsoft Java" than the language, that generates as much drama as there is water in the ocean? Im talking about you, <b>Rust</b>.

<br/>

## Why Rust?

<br/>

Jokes aside, Rust is pretty fun. Theres a lot of hype around it and its for a good reason.
Rust is the most desired language in [Stack Overflow Survey 2023](https://survey.stackoverflow.co/2023/#technology), its fast, it has borrow checker, it can shoot you in the foot, but what language doesn't?

<br/>

The state of Rust game development is pretty young and <i>[there's more game engines than games written in Rust](https://youtu.be/TGfQu0bQTKc?si=zJLF2i10Uhqhzo41)</i>. Either way, you can make a game with [Amethyst](https://amethyst.rs/), [Bevy](https://bevyengine.org/), [ggez](https://ggez.rs/) and much more.

<br/>

## What is Pong?

<br/>

If you don't know what Pong is ... have you been living under a rock? Pong is a table tennis sports game featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972.

![Pong gameplay](https://media.tenor.com/h5RG9KzJ8PYAAAAC/pong-game.gif)

Basically there are two <b>paddles</b> and a <b>ball</b>. You control one of the <b>paddles</b> and try to hit the <b>ball</b> with it. If you miss the <b>ball</b>, the other player gets a <b>point</b>. First player to get 10 points wins.

<br/>

## The shitcodin'

<br/>

Spoiler alert: Theres a github repo for this project. You can find it at [JohnBakhmat/rust-pong](https://github.com/JohnBakhmat/rust-pong)

<br/>

### Hello, world!

<br/>

When developing the app, I decided to use [Bevy](https://bevyengine.org/) game engine, coz it is Data-Driven ECS game engine, it is cross platform, the syntax looked understandable for my monkey brain.

<br/>

After setting up the project (do read [Bevy docs](https://bevyengine.org/), they are fun), i got left with this code:

```rust
use bevy::prelude::*;

fn main() {
    App::build()
        .add_plugins(DefaultPlugins)
        .add_systems(Startup,hello_world)
        .run();
}

fn hello_world(){
    println!("Hello, world!");
}

```

At this point if you run the app it just prints `Hello, world!` on start. Nothing fancy, but it works.

<br/>

### ECS (Entity Component System)

<br/>

Bevy is an ECS game engine, which means it's building blocks are:

- `Entities` - unique identifiers;
- `Components` - a piece of data associated with an entity;
- `Systems` - logic that operates on entities with specific components.;

In above code,`hello_world` is a `System`, coz it represents a chunk of logic and its called on startup (because it is bound in`.add_startup_system()`).
To better understand ECS lets visualize it:

![Ball Entity and Components](https://i.imgur.com/fYDVXQO.png)

There is an entity called <b>Ball</b>. It has two components: <b>Position</b>,<b>Velocity</b> and <b>Sprite</b>. The details of implementation are not important now.
If I was using GameObject oriented game engine, like Unity, Unreal or Godot, the logic is usually written in the GameObject itself. In ECS, the logic is written in `Systems``, which operate on entities <u><b>that have specific components</b></u>. This helps with code reusability and makes it easier to write tests and blah blah...

![ECS in a nutshell](https://i.imgur.com/4NrLJSJ.png)

<br/>

### Now to the actual game

<br/>

The game loop of Pong is pretty simple:

1. Spawn a ball in the middle of the screen;
2. Spawn two paddles on the left and right side of the screen;
3. Put the ball in motion;
4. Check if the ball collides with the paddle;
5. If the ball collides with the paddle, change the direction of the ball;
6. If the ball collides with top or bottom of the screen bounce it back;
7. If the ball collides with left or right side of the screen, give a point to the player on the opposite side;
8. If one of the players gets 10 points, end the game;

<br/>

Lets start small. Spawning a ball is pretty easy. We just need to create a new entity with `Ball` component and `Position` component. We also need to add `Sprite` component, so we can see the ball on the screen. To spawn a ball we will use new system called `spawn_ball`. ALSO we need a camera for our scene, so we can see the ball. To spawn a camera we will use another system called `spawn_camera`. We will add both of these systems to the app in `.add_systems()`.

```rust

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_systems(Startup, (spawn_ball, spawn_camera))
        .run();
}

#[derive(Component)]
struct Position {
    x: f32,
    y: f32,
}

#[derive(Component)]
struct Velocity {
    x: f32,
    y: f32,
}

#[derive(Component)]
struct Ball;

fn spawn_ball(mut commands: Commands) {
    commands.spawn((
        Ball,
        Position { x: 0.0, y: 0.0 },
        Velocity { x: 1.0, y: 1.0 },
        SpriteBundle {
            sprite: Sprite {
                color: Color::rgb(1., 1., 1.),
                custom_size: Some(Vec2::new(10., 10.)),
                ..default()
            },
            transform: Transform::from_xyz(0.0, 0.0, 0.0),
            ..default()
        },
    ));
}
```
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var drops, lightning
var man
function preload(){
   man=loadImage("Walking Frame/walking_1.png");
}

function setup(){
   createCanvas(400, 1000)
   engine = Engine.create();
   world = engine.world;
   drops = new Drop(100, 100, 5)
  
  // man.loadImage = image("WalkingFrame/walking_1.png")

}

function draw(){
   rectMode(CENTER)
    background(0)
      drops.display();
         
      image(man ,120,715,200,300);  
   }   


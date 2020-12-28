### Time simulation

When developing a game, it's often useful to be able to control time. We could slow it down when a character dies, or speed it up to make things look flashy, or stop time altogether when the player pauses the game.
Let's write an object we can use to simulate time and mess with it as we wish!

`new SimTime()`

Creates a new SimTime instance. Nothing special here. Once an instance has been created, we can use its methods to play with time, and get the current "simulated" time.

```
 let sim = new SimTime();
 instance.get()
```

Returns the current time withing the simulation. This value will start at 0.

```
sim.get() === 0
instance.set_speed(new_speed)

```
At the current realtime and simtime, the simulation speed is set to new_speed.
From the current realtime until the speed is changed again, simulated time should reflect this new speed.
Note: speed can go negative and may lead simulated time "into the past".

`sim.set_speed(2);  // now each change in real time will be doubled for simulate time`

`sim.set_speed(1);  // now changes in simulated time will be the same as in real time`

`instance.update(current_realtime)`

Used to tell the simulation what the current time is outside, in the real world. This will be used to calculate the change in realtime, and therefore the change in simulated time.
Real time only moves in one direction. So if `current_realtime` doesn't make sense (moves backwards), throw an error.
// assuming current speed is 1

```
sim.update(10);
sim.get() === 10;
```

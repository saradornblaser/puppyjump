Separated update() from class declaration

Update() methods - unique for:
  -dog
    dog can walk (2 or 3 images) and jump (1 image) and collide (1 image)
  -[bone, tennisBall, frisbee, sticks]
    (2 images each)
    need to be moving ~2x faster than doghouse and hydrant objects
  -[doghouse, hydrant]
    (1 image each)
     need to be moving ~2x slower than flying objects
  *cat...maybe later...needs to be moving relative to doghouse and hydrant, without running into them
  -ground
    (1 image) needs to be rerendered on every animate, OR not cleared from canvas

Functions
  -dog collides with flying object -> object disappears
  -dog collides with stationary object -> falls
  -increment points
  -decrement lives

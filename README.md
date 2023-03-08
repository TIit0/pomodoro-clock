# FreeCodeCamp Pomodoro Challenge


This one was a gatekeeper for useRef and useEffect. It really made sure I knew how to use both and when so I would not have a memory leak or an accidental render loop. I had to tackle this in very small chunks:

## Process:

First and foremost, how to manage time in JavaScript.

- For this, I decided to create a context where I would centralize time management to make it a little easier, and then it would feed it to the components without having to update separate pieces of state.


2. How much control the user had. The sliding bars, and how much freedom to set intervals would make it more complex.

- I didn't want to limit the user to fixed options like the FreeCodeCamp example, so I decided to go with an options button where they could interact with a slider input and an onChange listener. That way, they had complete freedom and could set a limit of 3 hours (3 hours is a long time to sit! Take a dance break to your fave song or stretch, breaks are important <3).

3. After I had sorted out the previous two, it was a matter of now seeing when it would be time to render or re-render.

- This was a little harder than it may seem: an analogy that I like is thinking that I was working with a hand watch or an engine. I had all these moving parts that I needed to make sure would work with each other at the precise moment they were told to without colliding or interfering. It did take a while to get the hang of it. I ended up making a style object that would update every second with the state to make that progress circle and made sure it would not lose progress when paused or resumed.

4. Polishing.
This was just going back, fixing bugs, and adding essential stuff. I realized it was a bit useless to have a timer with no sound because it would not let you focus on what you were doing if you had to check on it every once in a while. So, I added a sound and updated the tittle in case you want to peek at the time in tab without losing focus.
 

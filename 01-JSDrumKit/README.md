>This is a Javscript practice[Javascript30](https://javascript30.com/) by [Wes Bos](https://github.com/wesbos) which helps in  grasping the nuances of Javascript.Without the use of any frameworks,compilers,boilerplate and no libraries

# 01-Drum Kit
**`lessons learnt`**-key event listener, audio element, data attributes,Toggling styles

![](http://i.imgur.com/b9r5sEL.jpg)

view demo [here]()

### Binding an event to our keys when they are pressed.

`window.addEventListerner('keydown',playSound)`

- `window` is the global object present in the browser
- `playSound()` is the function which listens for keydown events being registered while using `EventListener`

### data-attributes
- Since HTML is designed with extensibility in mind we can associate certain `data` with a particular element.
- data-* attibutes allow us to store extra info on standard HTML elements

### ES6 
- Since we are using ES6 we have access to `template strings` read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) .which helps us to write code without concatenating strings by using backticks instead.
- ${} Expression interpolation which helps us to write variables directly without concatenation.

### Playing Sounds

We can provide a delay in playing the sound by just adding

` audio.currentTime=0;` which will reset the audio 

### Toggling Styles

- Since we are pressing a key and to show the effect we want to change the css states. This is achieved by using
    - `item.classList.add(className)` this class will be added to the element when key is pressed
    - We use `transitionend` `Event Listener` to end the transition state i.e scale down when key press is over by using remove() function.
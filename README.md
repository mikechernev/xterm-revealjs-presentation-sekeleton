## Reveal.js and Xterm with a shared terminal for the speaker and presentation views

### Run
 - `npm install && npm start`
 - Go to [http://localhost:8000]()
 - Press `S` to open speaker view
 - Enjoy!
 
### Demo

![Demo](demo.gif "This is how this works")
 
### Usage

```html
<section data-state="terminal-${uniqueId}">
    <div data-is-terminal data-dir="${startingLocation}"></div>
</section>
```
### Known issues

 - Sometimes a random `%` sign appears in some of the views
 - Have to reopen the speaker view after reload
 
### Hints

 - Using the speaker view pre-loads the terminal in the next slide (very handy 😜)
 
### Credit

Inspired by [@jkinkead](https://github.com/jkinkead)'s [xterm_base](https://github.com/jkinkead/reveal.js/tree/xterm_base) branch

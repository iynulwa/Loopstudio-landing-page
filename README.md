# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned
Learnt how to use CSS pseudo classess for better styling

```css
.footer-text::after{
        content: '';
        position: absolute;
        background-color: var(--clr--white);
        margin: auto;
        height: 0.13rem;
        width: 0;
        left: 15%;
        bottom: -0.5rem;
    }

    .footer-text:hover::after{
        width: 70%;
    }
```

### Useful resources

- [Pseudoclass explained](https://youtu.be/dIUOWdwwZBw?si=90-a-EptA7uI001p) - This helped me styled some complex designs. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@iynulwa](https://www.frontendmentor.io/profile/iynulwa)
- Twitter - [@iynulwa](https://www.twitter.com/iynulwa)
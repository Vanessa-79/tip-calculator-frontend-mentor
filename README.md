# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

I successfully implemented a tip calculator that allows users to:

- Calculate tip amount and total per person
- Select from preset tip percentages (5%, 10%, 15%, 25%, 50%)
- Enter a custom tip percentage
- Reset all inputs and calculations
- See responsive layout on different screen sizes
- View hover and active states for interactive elements

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: https://github.com/Vanessa-79/tip-calculator-frontend-mentor.git
- Live Site URL: "https://vanessa-79.github.io/tip-calculator-frontend-mentor/"

## My process

### Built with

- Semantic HTML5 markup with proper input labeling
- Modern CSS features:
  - CSS Custom Properties for theming
  - Flexbox for one-dimensional layouts
  - CSS Grid for two-column layout
  - Mobile-first responsive design
- Vanilla JavaScript for real-time calculations
- Input validation and state management
- BEM-like class naming convention

### Implementation Details

#### HTML Structure
```html
<!-- Calculator layout -->
<div class="calculator">
  <!-- Input section for bill, tip selection, and people count -->
  <div class="input-section">
    <!-- Bill input with dollar icon -->
    <!-- Tip percentage selection grid -->
    <!-- Number of people input with person icon -->
  </div>
  
  <!-- Results section showing calculated amounts -->
  <div class="result-section">
    <!-- Tip amount and total per person display -->
    <!-- Reset button -->
  </div>
</div>
```

#### CSS Features
```css
/* Theme variables for consistent styling */
:root {
  --green-400: hsl(172, 67%, 45%);
  --green-900: hsl(183, 100%, 15%);
  /* ...other theme colors */
}

/* Responsive grid layout */
.calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .calculator {
    grid-template-columns: 1fr;
  }
}
```

#### JavaScript Functionality
```js
// Core calculation logic
function calculateTip() {
  if (bill > 0 && tipPercentage > 0 && numberOfPeople > 0) {
    const tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople;
    const totalPerPerson = bill / numberOfPeople + tipAmount;
    updateDisplay(tipAmount, totalPerPerson);
  }
}
```

### What I learned

- Implementing real-time calculations with input validation
- Creating a responsive layout using CSS Grid and Flexbox
- Managing application state in vanilla JavaScript
- Using CSS custom properties for theming
- Handling different input types and user interactions
- Creating a clean and maintainable code structure

### Continued development

Future improvements I'd like to make:

- Add input validation messages
- Implement smooth animations for state changes
- Add keyboard navigation support
- Improve accessibility features
- Add error handling for edge cases
- Add local storage to persist calculations

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Helped with layout implementation
- [JavaScript Number Formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) - Used for currency formatting
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Used for theming

## Author

- Website - [Vanessa]
- Frontend Mentor - [@Vanessa-79]

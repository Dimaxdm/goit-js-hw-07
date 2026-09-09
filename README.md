# Homework. Topic 12. DOM Model. Events

---

## Task 1. Categories

Complete this task by working with the `ul#categories` element.

The HTML contains a list of categories:

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

### Requirements

**Using DOM element properties and methods, write a script that**:

1. Counts and logs the number of categories in `ul#categories`, that is, the number of `li.item` elements.
2. For each `li.item` element in the `ul#categories` list, finds and logs:
* the text content of its heading (`<h2>`);
* the number of elements in the category (all `<li>` elements nested inside it).

**Review Checklist**
* The number of categories, their names, and the number of elements are obtained using DOM element properties and methods.
* The data for each category is obtained and logged inside a loop or `forEach()` method.
* The console output should contain the following messages:

<img width="806" height="300" alt="image" src="https://github.com/user-attachments/assets/936de698-ed60-4c47-8aec-d7656f421ba6" />

---
## Task 2. Image Gallery

Write a script to create an image gallery based on an array of data.

The HTML contains an empty `ul.gallery` list:

```html
<ul class="gallery"></ul>
```
Use the images array of objects to create `<img>` elements nested inside `<li>` elements.

You can create and add HTML elements using `document.createElement()` and `elem.append()`, or using template strings and `elem.insertAdjacentHTML()`.
* All gallery elements must be added to the DOM in a single append operation.
* Add minimal gallery styling using Flexbox and CSS classes.

```JavaScript
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```
**Review Checklist**
* A gallery containing three images is created and added to the DOM.
* The gallery is added to the ul.gallery list and consists of three <li> elements containing <img> elements.
* The data from the images array of objects is used to create the <img> elements.
* All gallery elements are added to the DOM in a single append operation.
* The gallery has minimal Flexbox styling implemented using CSS classes.

--- 

## Task 3. Greeting Name 

Write a script that listens for the `input` event on `input#name-input` and inserts its current value into `span#name-output` as the name in the greeting.

Make sure to trim whitespace from both ends of the input value. If the input is empty or contains only whitespace, the span should display `"Anonymous"` instead of the entered name.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```
**Review Checklist**
* The input event is listened to on `input#name-input`.
* As the user types, the current input value is inserted into `span#name-output` as the name in the greeting.
* Whitespace is trimmed from both ends of the input value.
* If the input is empty or contains only whitespace, the span displays `"Anonymous"`.

--- 

## Task 4. Login Form

Write a script to manage the login form.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```

**Requirements**
1. The form.login-form form should be submitted using the `submit` event.
2. The page should not reload when the form is submitted.
3. If any form fields are empty when the form is submitted, display an `alert` with the message `'All form fields must be filled in'`. Do not add the `required` attribute to the inputs. Validation must be performed using JavaScript.
4. If the user fills in all fields and submits the form, collect the field values into an object with two properties. The keys should be the input names, and the values should be the corresponding input values with whitespace trimmed from both ends. Use the `elements` property to access the form elements.
5. On form submission, log the object containing the entered data to the console and clear the form fields using the `reset` method.

Review Checklist
* The `submit` event is listened to.
* The page does not reload when the form is submitted.
* If any form fields are empty when the form is submitted, an `alert` is displayed.
* On submission, an object with two properties is logged to the console. The keys are the input names, and the values are the corresponding input values with whitespace trimmed from both ends.
* The form fields are cleared after submission.

--- 
## Task 5. Change Background Color

Write a script that changes the background color of the `<body>` element using an inline style when the `button.change-color` button is clicked. The generated color should also be displayed as text content inside `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Use the `getRandomHexColor()` function to generate a random color.

```JavaScript
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

**Note**: The `getRandomHexColor()` function returns a color in hexadecimal format, while the background color of the `<body>` element will be displayed in `rgb` format. This is expected and does not require any additional changes.

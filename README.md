# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](11.png)
![](2.png)
![](3.png)


### Links

- Solution URL: [Solution](https://github.com/kurokurotho/new2.github.io.git)
- Live Site URL: [Live](https://kurokurotho.github.io/new2.github.io/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This time i learned a little about form validation ,here in this challenge I was working on email Validation.

To see how you can add code snippets, see below:

```html
 <form action="" onsubmit=" return validate()" name="myForm">
```
if the return value is false then the from will not be furthur processed .Validation is done in the function validate.


```js
function validate(){
  //some more code required for the validation of input for example:email input.
if(conditions){
  return true
}
  
  else{
    return false
  }
}
```

### Continued development

This project just taught me a little about form validation,I will be exploring rest of the form validation techinques and methods. 


### Useful resources

- [Email Validation using javascript](https://www.w3resource.com/javascript/form/email-validation.php) - This was really helpful.
- [Form Validation](https://www.youtube.com/watch?v=fQ9QkBGohLw) - This is an amazing video .


## Author

- Frontend Mentor - [@kurokurotho](https://www.frontendmentor.io/profile/kurokurotho)
- Twitter - [@simple_smile](https://twitter.com/simple_smile9)




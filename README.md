# Question

## Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each

static:
The default position value for elements. Elements with position: static are positioned in the normal flow of the document. They are not affected by the top, bottom, left, or right properties. Here's an example:

```
<div class="static-position-example">
  This is a static position example.
</div>

<style>
  .static-position-example {
    position: static;
  }
</style>
```

fixed:
An element with position: fixed is positioned relative to the browser window. It remains fixed at its specified position even when the page is scrolled. Here's an example:


```
<div class="fixed-position-example">
  This is a fixed position example.
</div>

<style>
  .fixed-position-example {
    position: fixed;
    top: 20px;
    right: 20px;
  }
</style>
```

sticky:
Elements with position: sticky are positioned based on the user's scroll position. They behave like position: relative until a specific scroll threshold is met. After that, they behave like position: fixed and remain fixed at their specified position. Here's an 



```
<div class="sticky-position-example">
  This is a sticky position example.
</div>

<style>
  .sticky-position-example {
    position: sticky;
    top: 50px;
  }
</style>
```

An element with position: relative is positioned relative to its normal position. It can be moved using the top, bottom, left, and right properties. Here's an example:

```
<div class="relative-position-example">
  This is a relative position example.
</div>

<style>
  .relative-position-example {
    position: relative;
    top: 20px;
    left: 50px;
  }
</style>
```

An element with position: absolute is positioned relative to its nearest positioned ancestor or to the initial containing block if there is no positioned ancestor. It is taken out of the normal flow of the document. Here's an example:

```
<div class="absolute-position-example">
  This is an absolute position example.
</div>

<style>
  .absolute-position-example {
    position: absolute;
    top: 50px;
    left: 100px;
  }
</style>
```


# Create a form with basic validation (name, email, phone number, password, age, gender, date, color picker)

```
<!DOCTYPE html>
<html>
<head>
  <title>Basic Form with Validation</title>
</head>
<body>
  <h2>Basic Form with Validation</h2>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="100" required><br>

    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male" required>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female" required>
    <label for="female">Female</label><br>

    <label for="date">Date:</label>
    <input type="date" id="date" name="date" required><br>

    <label for="color">Favorite Color:</label>
    <input type="color" id="color" name="color" required><br>

    <input type="submit" value="Submit">
  </form>
</body>
</html>
```


#  Explain what is execution context in detail with diagram


In JavaScript, an execution context is an abstract concept that represents the environment in which JavaScript code is executed. It includes variables, functions, objects, and the scope chain that are relevant to a particular piece of code during its runtime. Understanding execution context is essential for understanding how JavaScript code is executed.

A single JavaScript program can have multiple execution contexts. Each time a function is called, a new execution context is created. The execution contexts are organized in a stack-like structure known as the "call stack" or "execution stack". The topmost execution context in the stack is the one that is currently being executed, while the other execution contexts are waiting for their turn.

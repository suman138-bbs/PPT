# Question

1. Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each
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

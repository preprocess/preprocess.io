Short closures are a recent addition to the PHP language, but they're **only available in version 7.4 and above**. They are also somewhat limited somewhat to other languages.

The short closures macro was created to allow identical syntax to be used as far back as [Yay](https://github.com/marcioAlmada/yay) supports (**currently PHP 7.1**).

---

This is how you install it ↓

```
composer require pre/short-closures
```

---

This is how you use it ↓

```
$closure = fn($arg) => print arg;
```

---

This is what it compiles to ↓

```
$closure = function($arg) {
    print $arg;
};
```

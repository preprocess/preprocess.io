**Pre** is a preprocessing tool for PHP. It's like [Babel](https://babeljs.io), except easier to set up and write your own plugins for. It compiles new syntax to work in new and old versions of PHP.

---

Get started by **adding a macro** to your project ↓

```
composer require pre/short-closures
```

---

Then, process **a single file**, kinda like the **require** statement ↓

```
print \Pre\Plugin\process(__DIR__ . "/path/to/file.pre");
```

---

Or just rename a file **being loaded with PSR-4** so that it ends in **.pre** ↓

```
mv /path/to/file.php /path/to/file.pre
```

# JET-Framework
Is a reactive framework based on JET which you can use to not only build and interpolate your template, but also update the it on-the-fly in the browser!

You have only need two commands.

One for the initialization. It takes two required arguments: 
```
jet.init('app', vm);
```

You can also pass a function as a third argument. This will be called after everything has been initialized.

*'app'* is an element id, in which you did all your templating and vm is a viewmodel.

> example viewmodel:
```
const vm = {
    shoppingList: {
        groceryStore: ['Carrot', 'Melon', 'Potato']
    },
    a: {
        b: {
            c: 1337
        }
    },
    message: 'Hello world!',
    hello_world: '<div>{{ message }}</div>'
};
```

After you initialized the framework, you can use the following command to update the template with a new value:

```
jet.update('a.b.c', 42);
``` 

*'a.b.c* is the complete path in the vm, so in this example, *c* is nested under *b* which is nested under *a*.

Another valid example would be:

```
jet.update('hello_world', '<h1>{{ message }}</h1>')
```

It works just like you would access a property from a JSON object.

In the above example you are setting a new template. Which will now be rendered. This is useful for having router functionality. 

You could write your own router to fetch a new template on demand and update your viewmodel. All the properties inside will also become reactive!


## 8.1. Get value
You can use the following command to retrieve the current value of a property inside the reactive viewmodel:

```
jet.get('a.b.c');
```

Where *a.b.c* is the complete property path.

## 8.2. Watchers
You can do a function when a value changes, it will pass the new value as an argument:

```
jet.watch('a.b.c', myFunction(newValue) => console.log(newValue));
```

**N.B.** if the value is nested and you update it like ```'a.b.c'``` it will only trigger when you watch it with ```'a.b.c'``` parameter and *not* for instance if you do ```jet.update('a.b', { c: 'newString' } );```

## 8.3. Adding event listeners
Shorthand for ```document.getElementById(id).addEventListener(event, eventFunction, options?)```:
 
```
jet.addEvent(id, event, eventFunction, options?);
```

Shorthand for ```document.getElementById(id).removeEventListener(event, eventFunction, options?)```:
 
```
jet.removeEvent(id, event, eventFunction, options?);
```
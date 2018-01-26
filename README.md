# Passable-React

[![Greenkeeper badge](https://badges.greenkeeper.io/ealush/passable-react.svg)](https://greenkeeper.io/)

Passable-React is a package that allows easy integration with [passable](https://fiverr.github.io/passable/) validations. It manages the form state itself, leaving you to only care about writing the validations and hooking it all together.

## Philosophy
When using passable-react, you let its core component `PassableProvider` take control over the state of the form and supply you with different functions and values that allow you connect it to your state. PassableProvider uses the children as a function pattern both for familiarity and flexibility.

## Installation
```js
npm install --save passable-react
```

## Usage

```js
// ./App.js
import React, {Component} from 'react';
import PassableProvider from 'passable-react';
import passes from './passes.js';

class App extends Component {
    initiaFormState = {
        username: 'initial value',
        password: '',
        spam: {
            checked: true
        }
    }

    render() {
        return (
            <PassableProvider passes={passes} initialFormState={this.initialFormState}>
            {(setTouchedOnEvent, validateOnEvent, validateOne, validateAll, fields, errors, warnings) => {
                <form name="myform" onBlur={setTouchedOnEvent} onChange={validateOne} onSubmit={validateAll}>
                    <input type="text" name="username" value={fields.username.value}/>
                    {errors[username] && <span>{fields.username.errors}</span>}
                    <input type="password" name="password" value={fields.password.value}/>
                    {errors[password] && <span>{fields.password.errors}</span>}
                    <input type="checkbox" name="spam" value={fields.spam.value} checked={fields.spam.checked}/>
                    {errors[spam] && <span>{fields.spam.errors}</span>}
                    <input type="submit" value="Submit"/>
                </form>
            }}
            </PassableProvider>
        );
    }
}

// ./passes.js
import passable from 'passable';

export default function passes({ specific = [], data }) {
    return passable('myform', specific, (pass, enforce) => {
        pass('username', 'should be a string between 3 and 10 chars', () => {
            enforce(data.username.value).allOf({
                largerThanOrEquals: 5,
                smallerThanOrEquals: 10
            });
        });

        pass('password', 'can either be a number, or empty', () => {
            enforce(data.password.value).allOf({
                isEmpty: false
            });
        });

        pass('spam', 'must be checked', () => !!data.password.checked);
    });
}
```

And that's all there is to it.
Here is what we did:
* We set our initial form state. It contains the default values for our form fields, including `dirty` and `touched`.
* We created a passes file which holds our validation logic.
* We attached both our initial form state and the passes to `PassableProvider`
* We grabbed the functions supplied by provider and used them for our onChange and onBlur for the form.
* We used the `fields` object to grab the current value and connect the inputs to the current state.
* We added conditional rendering of errors next to each input. They will automatically get added once validation of a field fails.

What else happens here?
* The `validateOnEvent` function both validates a field, and marks it as dirty.
* `setTouchedOnEvent` marks the field as `touched`

## The fields object:
Here is an example of a fields object

```js
fields: {
    checkbox: {
        errors: []
        value: true
        warnings: []
    },
    radio_input: {
        checked: true,
        errors: [],
        value: "yo",
        warnings: []
    },
    username: {
        dirty: true,
        errors: Array["should be a string between 3 and 10 chars"],
        hasError: true,
        hasWarning: false,
        touched: true,
        value: "An",
        warnings: []
    }
}
```

## The errors and warnings objects
The errors and warnings objects are simply counters of the amount of errors in each field, saving you the hassle of traversing down the fields object and counting each field manually:

```js
errors: {
    phone: 1
    username: 1
}
```
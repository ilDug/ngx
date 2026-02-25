# DagNgx
[![Build](https://github.com/ilDug/ngx/actions/workflows/build-and-test.yaml/badge.svg)](https://github.com/ilDug/ngx/actions/workflows/build-and-test.yaml)


DagNgx is a collection of Angular components and utilities designed to simplify the development of complex applications. It provides a set of reusable UI components, services, and tools that can be easily integrated into your Angular projects.


## Installation
To install DagNgx, you can use npm:

```bash
npm install dag-ngx
```

## Usage
After installing DagNgx, you can import the desired components and services into your Angular modules. For example, to use a component:

```typescript
...
import { DagError } from 'dag-ngx';
...

@Component({
    ...,
    imports: [..., DagError],
    ...
})
export class YourComponent {
  ...
}
```


## Features

### DagError
A component for displaying error messages in a user-friendly manner when used with **Angular signal forms**. It can be used to show validation errors, server errors, or any other type of error that may occur in your form.

```html
    <form novalidate (submit)="onSubmit($event)">
        <div>
            <label>email</label>
            <input type="email" [formField]="form.email" />
            <dag-error [field]="form.email"></dag-error>
        </div>
        <div>
            <button type="submit" class="btn">Submit</button>
        </div>
    </form>
```

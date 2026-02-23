import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { schema, required, email, minLength, form, FormField, submit, validate } from "@angular/forms/signals";
import { DagError } from 'dag-ngx';

interface User {
    email: string;
    password: string;
    confirmPassword: string;
}

const userSchema = schema<User>(root => {
    email(root.email, { message: 'Email is invalid' });
    required(root.email, { message: 'Email is required' });
    minLength(root.password, 8, { message: 'Password must be at least 8 characters long' });
    required(root.password, { message: 'Password is required' })
    required(root.confirmPassword, { message: 'Confirm Password is required' });
    validate(root.confirmPassword, ({ value, valueOf }) => {
        if (value() !== valueOf(root.password)) {
            return { message: 'Passwords do not match', kind: 'passwordMismatch' };
        }
        return null;
    });
})


@Component({
    selector: 'demo-errors',
    imports: [FormField, JsonPipe, CommonModule, DagError],
    templateUrl: './errors.html',
    styleUrl: './errors.scss',
})
export class Errors {

    user = signal<User>({
        email: '',
        password: '',
        confirmPassword: ''
    });

    form = form(this.user, userSchema);

    public onSubmit(event: Event) {
        event.preventDefault();
        submit(this.form, async () => {
            console.log('Form submitted successfully with value:', this.form().value());
        })
        this.form.email
    }

}

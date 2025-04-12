const helper = require('./helper.js');
const React = require('react');
const { createRoot } = require('react-dom/client');

const handleLogin = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#user').value;
    const pass = e.target.querySelector('#pass').value;

    if (!username || !pass) {
        helper.handleError('Username or password is empty!');
        return false;
    }

    helper.sendPost(e.target.action, { username, pass });
    return false;
}

const handleSignup = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#user').value;
    const pass = e.target.querySelector('#pass').value;
    const pass2 = e.target.querySelector('#pass2').value;

    if (!username || !pass || !pass2) {
        helper.handleError('All fields are required!');
        return false;
    }

    if (pass !== pass2) {
        helper.handleError('Passwords do not match!');
        return false;
    }

    helper.sendPost(e.target.action, { username, pass, pass2 });
    return false;
}

const LoginWindow = (props) => {
    return (
        <form id="loginForm"
            name="loginForm"
            onSubmit={handleLogin}
            action="/login"
            method="POST"
            className="mainForm"
        >
            <label htmlFor="username">Username:</label>
            <input id="user" type="text" name="username" placeholder="username"></input>
            <label htmlFor="pass">Password: </label>
            <input id="pass" type="password" name="pass" placeholder="password"></input>
            <input className="formSubmit" type="submit" value="Sign in"></input>
        </form>
    );
};

const SignUpWindow = (props) => {
    return (
        <form id="signUpForm"
            name="signUpForm"
            onSubmit={handleSignup}
            action="/signUp"
            method="POST"
            className="mainForm"
        >
            <label htmlFor="username">Username:</label>
            <input id="user" type="text" name="username" placeholder="username"></input>
            <label htmlFor="pass">Password: </label>
            <input id="pass" type="password" name="pass" placeholder="password"></input>
            <label htmlFor="pass">Password: </label>
            <input id="pass2" type="password" name="pass2" placeholder="password"></input>
            <input className="formSubmit" type="submit" value="Sign in"></input>
        </form>
    );
};
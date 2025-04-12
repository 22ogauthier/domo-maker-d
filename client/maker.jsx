const helper = require('./helper.js');
const React = require('react');
const {userState, useEffect} = React;
const { createRoot } = require('react-dom/client');

const handleDomo = (e, onDomoAdded) => {
    e.preventDefault();
    helper.hideError();

    const name = e.target.querySelector('#domoName').value;
    const age = e.target.querySelector('#domoAge').value;

    if(!name || !age) {
        helper.handleError('All fields are required!');
        return false;
    }

    helper.sendPost(e.target.action, {name, age}, onDomoAdded);
    return false;
}
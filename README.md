# Uncontrolled Recursion Leading to Stack Overflow in JavaScript

This repository demonstrates a common error in JavaScript programming: uncontrolled recursion that leads to a stack overflow.  The `bug.js` file contains the flawed code, while `bugSolution.js` provides a corrected version.

## Problem

The provided recursive function `foo` lacks a proper base case when the first argument (`a`) is greater than the second argument (`b`). This results in infinite recursion.  JavaScript's call stack has a limited size, and once exceeded, a `RangeError: Maximum call stack size exceeded` error is thrown.

## Solution

The `bugSolution.js` file shows how to fix this problem by adding a base case that handles the scenario where `a` is greater than `b`, preventing infinite recursion.
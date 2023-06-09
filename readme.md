## Overview

This app allows users to generate a day/task plan based on AI using established productivity techniques.

![Image Reference](https://i.imgur.com/4olObwC.png)
![Working reference](https://i.imgur.com/ucnvvbO.gif)

## User Journey

How will how user interact and use this app? What problem am I helping this use solve AND how am I doing it?

```mermaid
graph TD;
  A[User] --> B[Generates day plan]
  B --> C[View details of the plan]
```

```mermaid
graph TD;
  A[User] --> B[types in what they want to achieve]
  B --> C[get a plan based on that]
```

## Application Architecture

Designing the algorithm for our code, problem

### Use case 1:

```mermaid
graph TD;
  A[accept use prompt from input] --> B[Use the prompt to generate an OpenAPI-based plan]
  B --> C[Display the plan to use in web view]
```

### Use case 2:

```mermaid
graph TD;
 A[User clicks on a technique btn] --> B[generate a OpenAPI-based plan based on a default prompt]
B --> C[Display the plan to use in web view]
```

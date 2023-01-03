# Introduction

Welcome to our storybook submodule!

Storybook is a tool for developing and testing UI components in isolation. It allows you to browse a component library, view the different states of each component, and interact with them.

# Getting Started

Install the storybook submodule as a dev dependency:

npm install --save-dev @our-project/storybook
Start the storybook server:

npm run storybook
The storybook will be available in your default browser at http://localhost:6006.

# Adding Stories

To add new stories for a component, create a new file in the stories directory for that component. The file should export a default function that returns the JSX for the story. For example:

```
import React from 'react';
import MyComponent from '../src/MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
};

export const Default = () => <MyComponent />;
export const WithProps = () => <MyComponent size="large" />;
```

Further Information
For more information on using storybook, check out the official documentation.

https://storybook.js.org/docs/react/get-started/introduction

We hope you enjoy using our storybook submodule!

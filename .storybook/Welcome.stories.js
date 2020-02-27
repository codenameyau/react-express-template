import React from 'react';
import styled from 'styled-components';
import { linkTo } from '@storybook/addon-links';

const Welcome = () => (
  <div>
    <h1>Welcome to storybook</h1>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      A story is a single state of one or more UI components. You can have as many stories
      as you want. Basically a story is like a visual test case.
    </p>
    <p>
      Just like that, you can add your own components as stories.
      <br />
      You can also edit those components and see changes right away.
    </p>
    <p>
      Usually we create stories with smaller UI components in the app.
      <br />
      Have a look at the{' '}
      <a
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Writing Stories
      </a>{' '}
      section in our documentation.
    </p>
  </div>
);

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to Storybook',
};

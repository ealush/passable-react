import React from 'react';
import { storiesOf } from '@storybook/react';
import MyForm from './MyForm';

storiesOf('Simple Example', module)
    .add('with text', () => (
        <MyForm/>
    ));
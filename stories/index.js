import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyForm from './MyForm';

storiesOf('Simple Example', module)
    .add('with text', () => (
        <MyForm/>
    ));
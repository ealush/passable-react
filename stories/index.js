import React from 'react';
import { storiesOf } from '@storybook/react';
import PassableProvider from '../src/PassableProvider';
import passes from './MyForm/passes';
import MyForm from './MyForm';

storiesOf('Simple Example', module)
    .add('with text', () => (
        <PassableProvider name="MyForm" passes={passes}>
            <MyForm/>
        </PassableProvider>
    ));
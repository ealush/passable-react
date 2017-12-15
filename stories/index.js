import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PassableProvider from '../src/index';
import passes from './MyForm/passes';

storiesOf('Button', module)
  .add('with text', () => (
    <PassableProvider name="MyForm" passes={passes}>
      {({onChange, onBlur, fields}) => (
        <div>
          <input type="text" onChange={onChange} onBlur={onBlur} name="username"/>
          <input type="number" onChange={onChange} onBlur={onBlur} name="phone"/>
        </div>
      )}
    </PassableProvider>
  ));
import React from 'react';
import { shallow } from 'enzyme';
import PassableProvider from '../index';

describe('Test PassableProvider render function', () => {

    const initialFormState = {
        field_1: 'hello',
        field_2: {
            checked: true
        }
    }
    const formRender = shallow(
        <PassableProvider initialFormState={initialFormState}>
            {(fields) => (
                <form action="">
                    <label className="username">Username
                        <input type="text" defaultValue={initialFormState.field_1} name="field_1"/>
                    </label>
                    <label className="is-alive">Is Alive
                        <input type="checkbox" defaultChecked={initialFormState.field_2.checked} name="field_2"/>
                    </label>
                </form>
            )}
        </PassableProvider>
    );

    describe('PassableProvider children rendering', () => {
        it('should render all children correctly', () => {
            expect(formRender).toMatchSnapshot();
        });

        it('should render null when children is not a function', () => {
            expect(shallow(
                <PassableProvider initialFormState={initialFormState}>
                    <input/>
                </PassableProvider>
            ).html()).toBe(null);
        });
    });

    describe('PassableProvider initialFormState prop', () => {
        it('should merge `field_1` initialState value into provider state', () => {
            expect(formRender.find('.username input').props().defaultValue).toBe('hello');
        });

        it('should merge `field_2` initialState value into provider state', () => {
            expect(formRender.find('.is-alive input').props().defaultChecked).toBe(true);
        });
    });
});

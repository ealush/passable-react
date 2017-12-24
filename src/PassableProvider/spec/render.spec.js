import React from 'react';
import { shallow, mount } from 'enzyme';
import PassableProvider from '../index';

describe('Test PassableProvider render function', () => {

    const initialFormState = {
        field_1: 'hello',
        field_2: {
            checked: true
        }
    }

    let formRender;

    beforeEach(() => {
        formRender = shallow(
            <PassableProvider name="form_1" passes={() => undefined} initialFormState={initialFormState}>
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
        )
    });

    describe('PassableProvider children rendering', () => {
        it('should render all children correctly', () => {
            expect(formRender).toMatchSnapshot();
        });

        it('should render null when children is not a function', () => {
            expect(shallow(
                <PassableProvider name="form_1" passes={() => undefined} initialFormState={initialFormState}>
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

    describe('General API', () => {

        it('returns null when no (or invalid) form name is specified', () => {
            const wrapper = mount(
                <PassableProvider passes={() => undefined}>
                    {() => (<input type="text" name="field_1" />)}
                </PassableProvider>
            );
            expect(wrapper.html()).toBe(null);
        });

        it('returns null when no (or invalid) passes are specified', () => {
            const wrapper = mount(
                <PassableProvider name="form_1" >
                    {() => (<input type="text" name="field_1" />)}
                </PassableProvider>
            );
            expect(wrapper.html()).toBe(null);
        });
    });
});

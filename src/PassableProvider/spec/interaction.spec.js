import React from 'react';
import { mount } from 'enzyme';
import PassableProvider from '../index';
import passes from './interaction.passes';

describe('Test user interaction', () => {
    let wrapper;

    describe('Passable validation scenarios', () => {

        beforeEach(() => {
            wrapper = mount(
                <PassableProvider name="form_1" passes={passes}>
                    {({ onChange, onBlur, validate, fields, errors, warnings }) => (
                        <form onChange={onChange} onBlur={onBlur} onSubmit={validate}>
                            <input type="text" name="field_1" />
                            <input type="text" name="field_2" />
                            <input type="text" name="field_3" />
                            <input type="text" name="field_4" />
                            <input type="text" name="field_5" />
                            <input type="text" name="field_6" />
                            <input type="submit"/>
                        </form>
                    )}
                </PassableProvider>
            );
        });

        it('uses `specific` argument to only validate field_1 on change (error)', () => {
            wrapper.find('[name="field_1"]').simulate('change');
            expect(wrapper.state()).toMatchSnapshot();
        });

        it('uses `specific` argument to only validate field_4 on change (warn)', () => {
            wrapper.find('[name="field_4"]').simulate('change');
            expect(wrapper.state()).toMatchSnapshot();
        });

        it('validates the whole form on submit', () => {
            wrapper.find('[type="submit"]').simulate('click');
            expect(wrapper.state()).toMatchSnapshot();
        });
    });
});

describe('Test touched/dirty behavior', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <PassableProvider name="form_1" passes={passes}>
                {({ onChange, onBlur, validate, fields, errors, warnings }) => (
                    <form onChange={onChange} onBlur={onBlur} onSubmit={validate}>
                        <input type="text" name="field_2"/>
                        <input type="radio" name="field_3"/>
                        <input type="text" name="field_5"/>
                        <input type="checkbox" name="field_6"/>
                        <input type="submit"/>
                    </form>
                )}
            </PassableProvider>
        );
    });

    it('adds touched to field-state on blur', () => {
        wrapper.find('[name="field_2"]').simulate('blur');
        expect(wrapper.state()).toMatchSnapshot();
    });

    it('adds dirty to field-state on change', () => {
        wrapper.find('[name="field_3"]').simulate('change');
        expect(wrapper.state()).toMatchSnapshot();
    });
});

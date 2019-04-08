/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import TabList from './TabList';

describe('TabList', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<TabList />);

    expect(wrapper).toHaveClassName('c-tab__list');
  });
});
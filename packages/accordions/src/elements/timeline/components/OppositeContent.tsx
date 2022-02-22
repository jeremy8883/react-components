/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledOppositeContent } from '../../../styled';

const OppositeContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledOppositeContent ref={ref} {...props} />
);

OppositeContentComponent.displayName = 'Timeline.OppositeContent';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const OppositeContent = OppositeContentComponent;

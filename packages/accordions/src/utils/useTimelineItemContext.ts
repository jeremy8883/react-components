/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext, useContext, ReactNode } from 'react';

export interface ITimelineItemContext {
  icon?: ReactNode;
  surfaceColor?: string;
}

export const TimelineItemContext = createContext<ITimelineItemContext | undefined>(undefined);

export const useTimelineItemContext = () => {
  const context = useContext(TimelineItemContext);

  if (context === undefined) {
    throw new Error('This component must be rendered within a Timeline.Item component');
  }

  return context;
};

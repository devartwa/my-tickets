import { Events } from '../../@types/eventTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type EventsState = {
  events: Array<Events>;
  errorEvents?: string | undefined;
};

const initialState: EventsState = {
  events: [],
  errorEvents: undefined,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Events>) => {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;

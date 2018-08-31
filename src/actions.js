// action creator == function that return an action object
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}

import type { User } from "../types/user";

export type UserAction =
  | { type: "SET_FIELD"; field: keyof User; value: string }
  | { type: "CANCEL" }
  | { type: "LOAD"; payload: User }
  | { type: "SAVE_DRAFT"; payload: User };

export interface UserState {
    original: User;
    draft: User;
}

export const initialUserState: UserState = {
  original: {
    id: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    accounts: []
  },
  draft: {
    id: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    accounts: []
  }
};

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, draft: {...state.draft, [action.field]: action.value} };
    case "LOAD":
    case "SAVE_DRAFT":
        return { original: action.payload, draft: action.payload };
    case "CANCEL":
        return {...state, draft: state.original };
    default:
      return state;
  }
}

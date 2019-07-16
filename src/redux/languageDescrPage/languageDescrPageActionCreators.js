import { ActionType } from './languageDescrPageActions';

export const onComeBack = currentLanguage => ({
  type: ActionType.COME_BACK_TO_STARTPAGE,
  payload: {
    currentLanguage,
  },
});
export const currentLanguage = currentLanguage => ({
  type: ActionType.SET_CL,
  payload: { currentLanguage },
});

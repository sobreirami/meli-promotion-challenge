import { FormEvent } from 'react';

export type HeaderParams = {
  search?: string;
};

type FormElements = HTMLFormControlsCollection & {
  search: HTMLInputElement;
};

export type CustomFormEvent = FormEvent<HTMLFormElement> & {
  currentTarget: EventTarget & {
    elements: FormElements;
  };
};

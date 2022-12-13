export const hasAtLeastDigit = (value) => /\d/.test(value);

export const hasAtLeastLetter = (value) => /[a-zA-Z]/.test(value);

export const isPasswordValid = (password) => hasAtLeastDigit(password) && hasAtLeastLetter(password);

export const isEmailValid = (email)=> /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());

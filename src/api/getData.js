import fetch from '@/config/fetch';

export const getDatas = data => fetch('/shopping/restaurants', data);
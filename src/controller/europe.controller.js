/** @format */

import { Crud } from '../crud/crud.js';

class EuropeCrud extends Crud {
	path = 'Europe';
}
export const crud = new EuropeCrud();

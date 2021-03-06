/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IViewBased } from '../../types/view';
import { ToolbarElement } from './element';
import { IToolbarCollection } from '../../types';

export class ToolbarSeparator extends ToolbarElement {
	constructor(jodit: IToolbarCollection | IViewBased) {
		super(jodit);
		this.container.classList.add('jodit_toolbar_btn-separator');
	}
}

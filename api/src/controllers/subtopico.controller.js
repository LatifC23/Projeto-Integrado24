import { Constants } from "../constants/index.js";
import { BaseController } from "./index.js";

export class SubtopicoController extends BaseController {
	constructor(model, identifier = Constants.DEFAULT_IDENTIFIER) {
		super(model, identifier);
	}
}

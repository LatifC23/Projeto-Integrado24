import { Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";
import "./label.css";

export function LabelSucess({ texto }) {
	return (
		<div className="label-bar label-bar-sucess">
			<Texto type={COMMON_TYPES.INVERSO} size={COMMON_SIZES.FS1}>
				{texto}
			</Texto>
		</div>
	);
}

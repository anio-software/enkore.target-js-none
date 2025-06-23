import {createTargetJSNoneOptions} from "@anio-software/enkore-private.spec/factory"

export function defineTargetConfig(options: Parameters<typeof createTargetJSNoneOptions>[0]) {
	// @ts-ignore:next-line
	console.log("'defineTargetConfig' is deprecated and will be removed in the future. Use 'defineTargetOptions' instead.");

	return createTargetJSNoneOptions(options);
}

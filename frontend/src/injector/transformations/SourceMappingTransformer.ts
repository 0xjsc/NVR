import Transformation from "../Transformation";

export default class TSourceMappingTransformer extends Transformation {
    constructor() {
        super();
    }

    transform(source: string): string {
        source = source.replace(/\/\/# sourceMappingURL=bundle\.js\.map$/g, ";console.log(this);");
        return source;
    }
}
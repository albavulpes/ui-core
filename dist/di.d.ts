import 'reflect-metadata';
import Bottle from 'bottlejs';
declare const bottle: Bottle;
export declare function Service(serviceName: string): ClassDecorator;
export declare function Factory(serviceName: string, factoryFunction: (container: Bottle.IContainer) => any): ClassDecorator;
export declare function Require(): PropertyDecorator;
export default bottle;
//# sourceMappingURL=di.d.ts.map
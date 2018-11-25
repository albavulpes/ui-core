import 'reflect-metadata';
import Bottle from 'bottlejs';
var bottle = new Bottle();
export function Service(serviceName) {
    return function (constructor) {
        Reflect.defineMetadata('service:name', serviceName, constructor);
        bottle.service(serviceName, constructor);
    };
}
export function Factory(serviceName, factoryFunction) {
    return function (constructor) {
        Reflect.defineMetadata('service:name', serviceName, constructor);
        bottle.factory(serviceName, factoryFunction);
        return constructor;
    };
}
export function Require() {
    return function (prototype, propertyKey) {
        var designType = Reflect.getMetadata('design:type', prototype, propertyKey);
        var serviceName = Reflect.getMetadata('service:name', designType);
        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get: function () {
                    console.info("Resolved dependency: " + serviceName);
                    return bottle.container[serviceName];
                }
            });
        }
    };
}
export default bottle;

//# sourceMappingURL=di.js.map

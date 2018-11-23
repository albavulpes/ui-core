import 'reflect-metadata';
import Bottle from 'bottlejs';
var bottle = new Bottle();
export function Service() {
    return function (prototype, propertyKey) {
        var serviceType = Reflect.getMetadata('design:type', prototype, propertyKey);
        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get: function () {
                    return bottle.container[serviceType.name];
                }
            });
        }
    };
}
export default bottle;

//# sourceMappingURL=Container.js.map

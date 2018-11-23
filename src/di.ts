import 'reflect-metadata';
import Bottle from 'bottlejs';

const bottle = new Bottle();

export function Require(): PropertyDecorator {
    return (prototype: any, propertyKey: string) => {
        const serviceType = Reflect.getMetadata('design:type', prototype, propertyKey) as Function;

        if (delete prototype[propertyKey]) {
            Object.defineProperty(prototype, propertyKey, {
                get() {
                    return bottle.container[serviceType.name];
                }
            });
        }
    };
}

export default bottle;
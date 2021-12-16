import { ConfigServiceInterface } from '../src/config';
import { Handler } from 'aws-lambda';
import { LambdaInterface } from '../examples/utils/lambda';

/**
  * Options for the tracer class to be used during initialization.
  * 
  * Usage:
  * @example
  * ```typescript
  * const customConfigService: ConfigServiceInterface;
  * const tracerOptions: TracerOptions = {
  *   enabled?: true,
  *   serviceName?: 'my-service',
  *   customConfigService?: customConfigService, // Only needed for advanced uses
  * };
  * 
  * const tracer = new Tracer(tracerOptions);
  * ```
  */
type TracerOptions = {
  enabled?: boolean
  serviceName?: string
  customConfigService?: ConfigServiceInterface
};

// TODO: Revisit type below, it doesn't allow to define async handlers & it requires callback to be defined.
type HandlerMethodDecorator = (target: LambdaInterface, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<Handler>) => TypedPropertyDescriptor<Handler> | void;

// TODO: Revisit type below & make it more specific
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type MethodDecorator = (target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => any;

export {
  TracerOptions,
  HandlerMethodDecorator,
  MethodDecorator
};
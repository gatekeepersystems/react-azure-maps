import React from 'react';
import { IAzureDrawingLayerStatefulProviderProps } from '../types';
declare const AzureMapDrawingLayerContext: React.Context<import("../types").IAzureMapLayerContextState>;
declare const AzureMapDrawingLayerConsumer: React.Consumer<import("../types").IAzureMapLayerContextState>;
declare const AzureMapDrawingLayerStatefulProvider: ({ options, type, events, lifecycleEvents }: IAzureDrawingLayerStatefulProviderProps) => JSX.Element;
export { AzureMapDrawingLayerContext, AzureMapDrawingLayerConsumer, AzureMapDrawingLayerStatefulProvider as AzureMapDrawingLayerProvider };

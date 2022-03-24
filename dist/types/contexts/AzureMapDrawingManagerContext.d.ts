import React from 'react';
import 'azure-maps-drawing-tools/dist/atlas-drawing.min.css';
import { IAzureDrawingManagerStatefulProviderProps, IAzureMapDrawingManagerProps } from '../types';
declare const AzureMapDrawingManagerContext: React.Context<IAzureMapDrawingManagerProps>;
declare const AzureMapDrawingManagerConsumer: React.Consumer<IAzureMapDrawingManagerProps>;
declare const AzureMapDrawingManagerStatefulProvider: ({ options, children, events }: IAzureDrawingManagerStatefulProviderProps) => JSX.Element;
export { AzureMapDrawingManagerContext, AzureMapDrawingManagerConsumer, AzureMapDrawingManagerStatefulProvider as AzureMapDrawingManagerProvider };
